import React from 'react';
import {useState, useEffect} from "react";

export default function Form(props) {

    // State to hold the data of our form
    const [formData, setFormData] = useState({
        location: "",
    });

    // handleChange - updates formData when we type into form
    const handleChange = (event) => {
        // Use the event object to detect key, and value to update
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        // Prevent page from refreshing on form submission
        event.preventDefault();
        // Pass the location to weatherSearch prop, which is App's getWeather function
        props.weatherSearch(formData.location);
    };

    return (
        <div className='Form'>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="location"
                    onChange={handleChange}
                    value={formData.location}
                />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}
