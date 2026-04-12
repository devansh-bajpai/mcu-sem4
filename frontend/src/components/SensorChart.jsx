import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer,
} from "recharts";

export default function SensorChart({ data }) {
  return (
    <div className="chart-card">
      <div style={{ width: "100%", height: 260 }}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 4, right: 16, left: 0, bottom: 4 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="time" tick={{ fontSize: 11 }} interval="preserveStartEnd" />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="temperature" name="Temp (°C)"
              stroke="#e74c3c" dot={false} strokeWidth={2} />
            <Line type="monotone" dataKey="humidity" name="Humidity (%)"
              stroke="#3498db" dot={false} strokeWidth={2} />
            <Line type="monotone" dataKey="light" name="Light (lux/100)"
              stroke="#f39c12" dot={false} strokeWidth={2}
              formatter={(v) => (v / 100).toFixed(0)} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
