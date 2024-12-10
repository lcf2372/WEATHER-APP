import React, { useState } from 'react';
import './App.css';

function App() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);

    const fetchWeather = async () => {
        const response = await fetch(`/weather?city=${city}`);
        const data = await response.json();
        setWeather(data);
    };

    return (
        <div className="App">
            <h1>Weather App</h1>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city" />
            <button onClick={fetchWeather}>Get Weather</button>
            {weather && <pre>{JSON.stringify(weather, null, 2)}</pre>}
        </div>
    );
}

export default App;