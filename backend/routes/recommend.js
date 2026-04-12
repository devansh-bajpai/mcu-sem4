const express = require("express");
const router  = express.Router();
const plants  = require("../data/plants");
const SensorReading = require("../models/SensorReading");
const { recommendFromTrefle } = require("../services/trefleService");

// ── Local fallback ────────────────────────────────────────────────────────────

function scoreLocal(plant, { temperature, humidity, light }) {
  const partial = (val, min, max) => {
    if (val >= min && val <= max) return 1;
    const mid = (min + max) / 2, spread = (max - min) / 2 || 1;
    return Math.max(0, 1 - (Math.abs(val - mid) - spread) / spread);
  };
  return (
    partial(temperature, plant.temperature.min, plant.temperature.max) * 0.4 +
    partial(humidity,    plant.humidity.min,    plant.humidity.max)    * 0.35 +
    partial(light,       plant.light.min,       plant.light.max)       * 0.25
  );
}

function buildLocalReason(plant, { temperature, humidity, light }) {
  const tempDesc  = temperature < plant.temperature.min ? "cool temperature"
                  : temperature > plant.temperature.max ? "warm temperature"
                  : "suitable temperature";
  const humDesc   = humidity < plant.humidity.min ? "low humidity"
                  : humidity > plant.humidity.max ? "high humidity"
                  : "moderate humidity";
  const lightDesc = light < 2000 ? "low light" : light < 5000 ? "indirect light" : "bright light";
  return `${plant.name} thrives in ${tempDesc} (${temperature}°C), ${humDesc} (${humidity}%), and ${lightDesc} (${light.toLocaleString()} lux). ${plant.description}`;
}

function recommendLocal(sensorData) {
  const scored = plants
    .map((plant) => ({ plant, score: scoreLocal(plant, sensorData) }))
    .sort((a, b) => b.score - a.score);
  const best = scored[0];
  return {
    plant:        best.plant.name,
    emoji:        best.plant.emoji,
    reason:       buildLocalReason(best.plant, sensorData),
    score:        parseFloat(best.score.toFixed(3)),
    source:       "local",
    alternatives: scored.slice(1, 3).map((s) => ({
      plant: s.plant.name,
      emoji: s.plant.emoji,
      score: parseFloat(s.score.toFixed(3)),
    })),
  };
}

// ── POST /api/recommend-plant ─────────────────────────────────────────────────

router.post("/", async (req, res) => {
  try {
    const { temperature, humidity, light } = req.body;

    if (temperature === undefined || humidity === undefined || light === undefined)
      return res.status(400).json({ error: "Missing required fields: temperature, humidity, light" });

    const temp = parseFloat(temperature);
    const hum  = parseFloat(humidity);
    const lux  = parseFloat(light);

    if (isNaN(temp) || isNaN(hum) || isNaN(lux))
      return res.status(400).json({ error: "temperature, humidity, and light must be numbers" });
    if (temp < -50 || temp > 80)
      return res.status(400).json({ error: "Temperature out of range (-50 to 80°C)" });
    if (hum < 0 || hum > 100)
      return res.status(400).json({ error: "Humidity must be 0–100%" });
    if (lux < 0 || lux > 10000)
      return res.status(400).json({ error: "Light must be 0–10,000 lux" });

    let result;

    if (process.env.TREFLE_API_TOKEN) {
      try {
        result = await recommendFromTrefle(temp, hum, lux);
        console.log(`✅  Trefle → ${result.plant} (${result.score})`);
      } catch (err) {
        console.warn(`⚠️  Trefle failed (${err.message}) — using local dataset`);
        result = recommendLocal({ temperature: temp, humidity: hum, light: lux });
      }
    } else {
      result = recommendLocal({ temperature: temp, humidity: hum, light: lux });
    }

    await new SensorReading({
      temperature:      temp,
      humidity:         hum,
      light:            lux,
      recommendedPlant: result.plant,
      reason:           result.reason,
      score:            result.score,
      source:           result.source,
    }).save();

    return res.status(200).json(result);
  } catch (err) {
    console.error("Recommendation error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// ── GET /api/recommend-plant/history ─────────────────────────────────────────

router.get("/history", async (req, res) => {
  try {
    const limit = Math.min(parseInt(req.query.limit) || 20, 100);
    const readings = await SensorReading.find().sort({ timestamp: -1 }).limit(limit).lean();
    return res.status(200).json(readings);
  } catch (err) {
    console.error("History fetch error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
