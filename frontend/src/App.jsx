import { useState, useEffect, useCallback, useRef } from "react";
import SensorCard from "./components/SensorCard";
import PlantCard from "./components/PlantCard";
import SensorChart from "./components/SensorChart";
import HistoryTable from "./components/HistoryTable";
import "./App.css";

const API = process.env.REACT_APP_API_URL || "http://localhost:5001/api";

const randomSensor = () => ({
  temperature: +(Math.random() * 35 + 5).toFixed(1),
  humidity:    +(Math.random() * 85 + 10).toFixed(1),
  light:       Math.round(Math.random() * 9500 + 500),
});

export default function App() {
  const [sensor, setSensor]             = useState({ temperature: 24, humidity: 65, light: 5000 });
  const [recommendation, setRecommendation] = useState(null);
  const [history, setHistory]           = useState([]);
  const [chartData, setChartData]       = useState([]);
  const [loading, setLoading]           = useState(false);
  const [error, setError]               = useState(null);
  const [autoMode, setAutoMode]         = useState(false);
  const intervalRef                     = useRef(null);

  const fetchRecommendation = useCallback(async (data) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API}/recommend-plant`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error((await res.json()).error);
      const result = await res.json();
      setRecommendation(result);
      setHistory((prev) => [
        { ...data, recommendedPlant: result.plant, source: result.source, timestamp: new Date().toISOString() },
        ...prev.slice(0, 19),
      ]);
      setChartData((prev) => [
        ...prev.slice(-29),
        { time: new Date().toLocaleTimeString(), ...data },
      ]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetch(`${API}/recommend-plant/history`)
      .then((r) => r.json())
      .then(setHistory)
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (autoMode) {
      const tick = () => {
        const next = randomSensor();
        setSensor(next);
        fetchRecommendation(next);
      };
      tick();
      intervalRef.current = setInterval(tick, 4000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [autoMode, fetchRecommendation]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRecommendation(sensor);
  };

  return (
    <div className="app">
      <header className="header">
        <div>
          <h1>🌱 Plant Recommender</h1>
          <p>Real-time IoT sensor-driven plant recommendations</p>
        </div>
        <label className="toggle">
          <input
            type="checkbox"
            checked={autoMode}
            onChange={(e) => setAutoMode(e.target.checked)}
          />
          <span className="toggle-label">
            {autoMode ? "⏵ Live stream on" : "Simulate IoT stream"}
          </span>
        </label>
      </header>

      <main className="main">
        <section className="section">
          <h2 className="section-title">Sensor Input</h2>
          <form onSubmit={handleSubmit} className="sensor-grid">
            <SensorCard label="Temperature" value={sensor.temperature} unit="°C"
              min={0} max={50} step={0.5} icon="🌡️" color="#e74c3c"
              onChange={(v) => setSensor((s) => ({ ...s, temperature: +v }))} />
            <SensorCard label="Humidity" value={sensor.humidity} unit="%"
              min={0} max={100} step={1} icon="💧" color="#3498db"
              onChange={(v) => setSensor((s) => ({ ...s, humidity: +v }))} />
            <SensorCard label="Light" value={sensor.light} unit=" lux"
              min={0} max={10000} step={100} icon="☀️" color="#f39c12"
              onChange={(v) => setSensor((s) => ({ ...s, light: +v }))} />
            {!autoMode && (
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Analysing…" : "Get Recommendation →"}
              </button>
            )}
          </form>
          {error && <p className="error-msg">⚠️ {error}</p>}
        </section>

        {recommendation && (
          <section className="section">
            <h2 className="section-title">Recommendation</h2>
            <PlantCard data={recommendation} loading={loading} />
          </section>
        )}

        {chartData.length > 1 && (
          <section className="section">
            <h2 className="section-title">Sensor History Chart</h2>
            <SensorChart data={chartData} />
          </section>
        )}

        {history.length > 0 && (
          <section className="section">
            <h2 className="section-title">Past Readings</h2>
            <HistoryTable rows={history} />
          </section>
        )}
      </main>
    </div>
  );
}
