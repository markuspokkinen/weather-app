import React, { Component } from 'react';
import ImageViewer from './WeatherImage.js';
import'./CurrentWeather.css'

export default class CurrentWeather extends Component {

    constructor(props) {
        super(props)
        this.state = {
            weather: [{}],
            main: {}
        }
    }
    componentWillReceiveProps(nextprops) {
        fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + nextprops.lat + "&lon=" + nextprops.lon + "&APPID=9592eb101cb5b0e09de21ab8f991d0c3&units=metric")
            .then(res => res.json())
            .then(res => {
                this.setState({
                    name: res.name,
                    weather: res.weather,
                    main: res.main
                }, () => {
                    console.log(this.state)
                });
            })
    }


    render() {
        return (
            <div id="current-div">
                <p> {this.state.name}</p>
                <p>{this.state.weather[0].main}</p>
                <ImageViewer id={this.state.weather[0].icon} />
                <p>temp: {this.state.main.temp} C</p>
                <p>humidity: {this.state.main.humidity}%</p>
                <p>pressure: {this.state.main.pressure}</p>
                <p>temp max: {this.state.main.temp_max} C</p>
                <p>temp min: {this.state.main.temp_min} C</p>
            </div>
        )
    }
}