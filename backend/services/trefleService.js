const fetch = require("node-fetch");

const BASE  = "https://trefle.io/api/v1";
const TOKEN = process.env.TREFLE_API_TOKEN;

const cache    = new Map();
const CACHE_TTL = 10 * 60 * 1000;

function setCache(key, value) { cache.set(key, { value, ts: Date.now() }); }
function getCache(key) {
  const e = cache.get(key);
  if (!e) return null;
  if (Date.now() - e.ts > CACHE_TTL) { cache.delete(key); return null; }
  return e.value;
}

function luxToTrefle(lux)      { return Math.round(Math.min(10, Math.max(0, lux / 1000))); }
function humidityToTrefle(pct) { return Math.round(Math.min(10, Math.max(0, pct / 10))); }

async function fetchSpeciesDetail(id) {
  const url = `${BASE}/species/${id}?token=${TOKEN}`;
  const hit = getCache(url);
  if (hit) return hit;
  try {
    const res  = await fetch(url, { timeout: 6000 });
    if (!res.ok) return null;
    const json = await res.json();
    const d    = json.data || null;
    if (d) setCache(url, d);
    return d;
  } catch { return null; }
}

async function fetchCandidates(temperature) {
  if (!TOKEN) throw new Error("TREFLE_API_TOKEN not set");

  // Query broadly using only temperature range — most reliable field in Trefle
  const tempMin = temperature - 10;
  const tempMax = temperature + 10;

  const params = new URLSearchParams({
    token: TOKEN,
    "filter_not[minimum_temperature]": "null",
    "filter_not[maximum_temperature]": "null",
    page_size: 20,
    page: Math.floor(Math.random() * 5) + 1, // randomise page for variety
  });

  const url = `${BASE}/species?${params}`;

  const res = await fetch(url, { timeout: 8000 });
  if (!res.ok) throw new Error(`Trefle API error ${res.status}`);

  const json    = await res.json();
  const species = json.data || [];

  if (!species.length) throw new Error("No species returned from Trefle");

  // Fetch full details for top 8
  const detailed = await Promise.all(
    species.slice(0, 8).map((s) => fetchSpeciesDetail(s.id))
  );

  const valid = detailed.filter(
    (s) =>
      s &&
      s.growth &&
      s.growth.minimum_temperature?.deg_c != null &&
      s.growth.maximum_temperature?.deg_c != null
  );

  if (!valid.length) throw new Error("No Trefle candidates matched — falling back");
  return valid;
}

function scoreTrefle(species, temperature, humidity, light) {
  const g = species.growth;
  const partial = (val, min, max) => {
    if (val >= min && val <= max) return 1;
    const mid = (min + max) / 2, spread = (max - min) / 2 || 1;
    return Math.max(0, 1 - (Math.abs(val - mid) - spread) / spread);
  };

  const tLight = luxToTrefle(light);
  const tHum   = humidityToTrefle(humidity);

  const tempScore  = partial(temperature, g.minimum_temperature.deg_c, g.maximum_temperature.deg_c);
  const lightScore = g.light != null
    ? partial(tLight, Math.max(0, g.light - 2), Math.min(10, g.light + 2))
    : 0.5; // neutral if missing
  const humScore   = g.atmospheric_humidity != null
    ? partial(tHum, Math.max(0, g.atmospheric_humidity - 2), Math.min(10, g.atmospheric_humidity + 2))
    : 0.5; // neutral if missing

  return tempScore * 0.5 + humScore * 0.25 + lightScore * 0.25;
}

function buildReason(species, temperature, humidity, light) {
  const name      = species.common_name || species.scientific_name;
  const g         = species.growth;
  const lightDesc = light < 2000 ? "low light" : light < 5000 ? "indirect light" : "bright light";
  const humDesc   = humidity < 35 ? "dry conditions" : humidity < 65 ? "moderate humidity" : "high humidity";
  const tMin      = g.minimum_temperature?.deg_c ?? "?";
  const tMax      = g.maximum_temperature?.deg_c ?? "?";
  const extra     = g.description
    ? ` ${g.description.slice(0, 120)}${g.description.length > 120 ? "…" : ""}`
    : "";
  return `${name} grows well in ${lightDesc} (${light.toLocaleString()} lux), ${humDesc} (${humidity}%), and temperatures of ${temperature}°C. Ideal range: ${tMin}–${tMax}°C.${extra}`;
}

async function recommendFromTrefle(temperature, humidity, light) {
  const candidates = await fetchCandidates(temperature);

  const scored = candidates
    .map((s) => ({ s, score: scoreTrefle(s, temperature, humidity, light) }))
    .sort((a, b) => b.score - a.score);

  const best = scored[0];
  const name = best.s.common_name || best.s.scientific_name;

  return {
    plant:         name,
    scientificName:best.s.scientific_name,
    emoji:         "🌿",
    imageUrl:      best.s.image_url || null,
    reason:        buildReason(best.s, temperature, humidity, light),
    score:         parseFloat(best.score.toFixed(3)),
    source:        "trefle",
    trefleId:      best.s.id,
    alternatives:  scored.slice(1, 3).map((x) => ({
      plant:         x.s.common_name || x.s.scientific_name,
      scientificName:x.s.scientific_name,
      emoji:         "🌿",
      score:         parseFloat(x.score.toFixed(3)),
    })),
  };
}

module.exports = { recommendFromTrefle };