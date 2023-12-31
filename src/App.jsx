import {useState, useEffect} from "react";
import './components/weatherApp.css';

// Import components
import WeatherDisplay from "./components/WeatherDisplay";
import Form from "./components/Form";
export default function App() {

  const API_KEY = "ceee45ecf500e346c5e91b1fe7c66196";

  // State to hold weather data
  const [weather, setWeather] = useState(null);

  // Function to get weather
  const getWeather = async(location) => {
    try {
    // Make fetch request and store the response
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${API_KEY}`
    );
    // Parse JSON response into a JavaScript object
    const data = await response.json();
    // Set the weather state to the received data
    setWeather(data);
  } catch(e) {
		console.error(e)
	}
  };

   // This will run on the first render but not on subsquent renders
   useEffect(() => {
    getWeather("New York");
  }, []);

  return (
    <div className="App">
      <Form weatherSearch={getWeather}/>
      <WeatherDisplay weather={weather}/>
    </div>
  )
}

