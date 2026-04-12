export default function PlantCard({ data, loading }) {
  const pct      = Math.round(data.score * 100);
  const isTrefle = data.source === "trefle";

  return (
    <div className={`plant-card ${loading ? "plant-card--loading" : ""}`}>
      <div className="plant-main">
        {data.imageUrl ? (
          <img src={data.imageUrl} alt={data.plant} className="plant-img"
            onError={(e) => { e.target.style.display = "none"; }} />
        ) : (
          <span className="plant-emoji">{data.emoji || "🌿"}</span>
        )}
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 4 }}>
            <span className="plant-name">{data.plant}</span>
            <span className={`source-badge ${isTrefle ? "source-trefle" : "source-local"}`}>
              {isTrefle ? "Trefle API" : "Local dataset"}
            </span>
          </div>
          {data.scientificName && (
            <p className="plant-scientific">{data.scientificName}</p>
          )}
          <div className="match-bar-wrap">
            <div className="match-bar" style={{ width: `${pct}%` }} />
          </div>
          <span className="match-label">{pct}% match</span>
        </div>
      </div>
      <p className="plant-reason">{data.reason}</p>
      {data.alternatives?.length > 0 && (
        <div className="alternatives">
          <span className="alt-label">Alternatives:</span>
          {data.alternatives.map((a) => (
            <span key={a.plant} className="alt-chip">
              {a.emoji || "🌿"} {a.plant} ({Math.round(a.score * 100)}%)
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
