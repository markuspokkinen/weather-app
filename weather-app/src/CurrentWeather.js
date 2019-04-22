import React, { Component } from 'react';
import CurrentWeatherImage from './WeatherImage';
import OtherCurrentWeatherData from './OtherCurrentdata';
import './CurrentWeather.css'

export default class CurrentWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            weather: [],
            main: {}
        }
        this.getWeatherdata();
    }

    getWeatherdata = () => {
        fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + this.props.lat + "&lon=" + this.props.lon + "&APPID=9592eb101cb5b0e09de21ab8f991d0c3&units=metric")
            .then(response => response.json())
            .then(res => {
                this.setState({
                    name: res.name,
                    weather: res.weather,
                    main: res.main
                });
            });
    }
    render() {
        if (this.state.weather.length > 0) {
            return (
                <div id="current-div">
                    <h2> {this.state.name} </h2>
                    <h1>{Math.round(this.state.main.temp)} &#8451;</h1>
                    <CurrentWeatherImage icon={this.state.weather[0].icon} />
                    <OtherCurrentWeatherData main={this.state.main} />
                </div>
            )
        } else {
            return (
                <p>Loading current weather data</p>
                )
        }
    }
}