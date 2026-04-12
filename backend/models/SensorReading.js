const mongoose = require("mongoose");

const SensorReadingSchema = new mongoose.Schema({
  temperature:     { type: Number, required: true, min: -50, max: 80 },
  humidity:        { type: Number, required: true, min: 0, max: 100 },
  light:           { type: Number, required: true, min: 0, max: 10000 },
  recommendedPlant:{ type: String, required: true },
  reason:          { type: String, required: true },
  score:           { type: Number },
  source:          { type: String, enum: ["trefle", "local"], default: "local" },
  timestamp:       { type: Date, default: Date.now },
});

SensorReadingSchema.index({ timestamp: -1 });

module.exports = mongoose.model("SensorReading", SensorReadingSchema);
