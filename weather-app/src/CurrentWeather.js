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
            main: {},
            error:""
        }
        this.getWeatherdata();
    }

    getWeatherdata = () => {
        fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + this.props.lat + "&lon=" + this.props.lon + "&APPID=9592eb101cb5b0e09de21ab8f991d0c3&units=metric")
            .then(response => response.json())
            .then(res => {
                console.log(res);
                if (res.cod === 200) {
                    this.setState({
                        name: res.name,
                        weather: res.weather,
                        main: res.main,
                    })
                } else {
                    this.setState({
                        error: res.message
                    })
                }
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
            if (this.state.error === "") {
                return (
                    <div id="current-div-loading">
                        <p>Loading current weather data</p>
                        <div className="loader"></div>
                    </div>
                )
            } else {
                return (
                    <div id="current-div-error">
                        <p>{this.state.error}</p>
                    </div>
                    )
            }
        }
    }
}