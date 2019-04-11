import React from "react";
import Titles from "./components/Titles"
import Form from "./components/Form";
import Weather from "./components/Weather";
import './App.css';


const API_KEY = '71ec8973bafa2c0e262d8b19ff7f1413'; 

class App extends React.Component {
    state = { 
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }

    getWeather = async (e) => {
        e.preventDefault(); //Prevevents page refres
        const city = e.target.elements.city.value; //Takes input city value from form.js
        const country = e.target.elements.country.value; //Takes input country value from form.js
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`); //Makes api request
        const data = await api_call.json(); //Makes api request to json file
        if (city && country) { //If city and country has value
            this.setState({ //It changes states
                temperature: data.main.temp, //States are coming from api_call.json file
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ''
            });
        } else { //if not
            this.setState({ //It changes states
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: 'Please enter values'
            });
        }
    }
    render() {
        return(

            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-5 title-container">
                                <Titles />
                                </div>
                                <div className="col-xs-7 form-container">                                
                                <Form getWeather={this.getWeather/*Makes getweather props and now you can get info from form.js */} />
                                <Weather /*Passes a state values to weather.js */
                                    temperature={this.state.temperature} 
                                    humidity={this.state.humidity}
                                    city={this.state.city}
                                    country={this.state.country}
                                    description={this.state.description}
                                    error={this.state.error}
                                />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default App; //Exports App.js 