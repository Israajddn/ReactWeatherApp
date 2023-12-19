import {useState, useEffect} from "react";

// Import components
import WeatherDisplay from "./components/WeatherDisplay";
import Form from "./components/Form";
export default function App() {

  const API_KEY = import.meta.env.VITE_API_KEY;

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
    // Set the Movie state to the received data
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

