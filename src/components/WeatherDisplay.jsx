import React from 'react';
import './weatherApp.css';
import wind from '../Assets/wind.png';
import humidity from '../Assets/humidity.png';

export default function WeatherDisplay({ weather }) {
    // Function to return loaded JSX
    const loaded = () => {
        return (
            <div className='WeatherDisplay'>
                {/* display image for the weather */}
                <div className="weather-img">
                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                </div>
                {/* display location */}
                <div className="location">{weather.name}</div>
                {/* display temperature */}
                <div className="temp">{weather.main.temp.toFixed()} °F</div>
                {/* display description */}
                <div className="description">{weather.weather[0].description}</div>
                {/* display data */}
                <div className="data-container">
                    {/* humidity element */}
                    <div className="element">
                        <img src={humidity} alt="" className="img" />
                        <div className="data">
                            <div className="humidity">{weather.main.humidity} %</div>
                            <div className="text">Humidity</div>
                        </div>
                    </div>
                    {/* wind speed element */}
                    <div className="element">
                        <img src={wind} alt="" className="img" />
                        <div className="data">
                            <div className="wind">{weather.wind.speed.toFixed()} MPH</div>
                            <div className="text">Wind Speed</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
    // Function to return loading JSX
    const loading = () => {
        return <h1>No Weather to Display</h1>;
    };

    // Ternary operator will determine which functions JSX we will return
    return weather ? loaded() : loading();
}



