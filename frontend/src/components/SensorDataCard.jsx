import { useState, useEffect } from "react";

export default function SensorDataCard() {
  const [data, setData] = useState({ temperature: 0, humidity: 0, light: 0 });
  // const [temperature, setTemperature] = useState(0);
  // const [humidity, setHumidity] = useState(0);
  // const [light, setLight] = useState(0);

  // useEffect(() => {
  //   const x = async () => {
  //     const d = await fetch("http://localhost:5001/getSensorData");
  //     const dataJson = await d.json();

  //     setTemperature(dataJson.temperature);
  //     setHumidity(dataJson.humidity);
  //     setLight(dataJson.light);
  //   };
  //   x();
  // }, [temperature, humidity, light]);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const response = await fetch("http://localhost:5001/getSensorData");
        const dataJson = await response.json();
        setData(dataJson);
      } catch (error) {
        console.error("Error fetching sensor data:", error);
      }
    }, 3000); // Fetch every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);


  const cardStyle = {
    display: 'flex',
    gap: '15px',
    justifyContent: 'center',
    marginTop: '40px',
    fontFamily: 'Arial, sans-serif'
  };

  const boxStyle = {
    padding: '15px 20px',
    borderRadius: '10px',
    backgroundColor: '#f5f5f5',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    textAlign: 'center',
    minWidth: '100px'
  };

  const valueStyle = {
    fontSize: '20px',
    fontWeight: 'bold'
  };

  const labelStyle = {
    fontSize: '14px',
    color: '#555'
  };

  return (
    <div style={cardStyle}>
      {/* Temperature */}
      <div style={boxStyle}>
        <div style={valueStyle}>{data.temperature}°C</div>
        <div style={labelStyle}>Temperature</div>
      </div>

      {/* Humidity */}
      <div style={boxStyle}>
        <div style={valueStyle}>{data.humidity}%</div>
        <div style={labelStyle}>Humidity</div>
      </div>

      {/* Light */}
      <div style={boxStyle}>
        <div style={valueStyle}>{data.light} lx</div>
        <div style={labelStyle}>Light</div>
      </div>
    </div>
  );
}