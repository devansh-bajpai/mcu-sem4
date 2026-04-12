export default function SensorCard({ label, value, unit, min, max, step, icon, color, onChange }) {
  const display = unit === " lux" ? Number(value).toLocaleString() : value;
  return (
    <div className="sensor-card">
      <div className="sensor-top">
        <span className="sensor-icon">{icon}</span>
        <span className="sensor-label">{label}</span>
      </div>
      <div className="sensor-value" style={{ color }}>
        {display}<span className="sensor-unit">{unit}</span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(e.target.value)}
        className="sensor-slider"
        style={{ accentColor: color }}
      />
      <div className="sensor-minmax">
        <span>{min}</span><span>{max}</span>
      </div>
    </div>
  );
}
