export default function HistoryTable({ rows }) {
  return (
    <div className="history-wrap">
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Temp (°C)</th>
            <th>Humidity (%)</th>
            <th>Light (lux)</th>
            <th>Recommended Plant</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td>{new Date(r.timestamp).toLocaleTimeString()}</td>
              <td>{r.temperature}</td>
              <td>{r.humidity}</td>
              <td>{Number(r.light).toLocaleString()}</td>
              <td><span className="plant-tag">{r.recommendedPlant}</span></td>
              <td>
                <span className={r.source === "trefle" ? "source-dot-trefle" : "source-dot-local"}>
                  {r.source === "trefle" ? "Trefle" : "Local"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
