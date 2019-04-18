import React, { Component } from 'react';
import CurWeathIm from './weatherImage';
import './currentWeather.css'

export default class currentWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: [{}],
            main: {}
        }
        fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + this.props.lat + "&lon=" + this.props.lon + "&APPID=9592eb101cb5b0e09de21ab8f991d0c3&units=metric")
            .then(response => response.json())
            .then(res => {
                this.setState({
                    name: res.name,
                    weather: res.weather,
                    main: res.main
                });
            })
    }
    componentWillReceiveProps(nextprops) {
        fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + nextprops.lat + "&lon=" + nextprops.lon + "&APPID=9592eb101cb5b0e09de21ab8f991d0c3&units=metric")
            .then(response => response.json())
            .then(res => {
                this.setState({
                    name: res.name,
                    weather: res.weather,
                    main: res.main
                });
            })
    }


    render() {
        return (
            <div id="current-div">
                <h2> {this.state.name}</h2>
                <p><CurWeathIm icon={this.state.weather[0].icon} />{this.state.weather[0].main}</p>

                <p>&#8593; {this.state.main.temp_max} &#8451; &#8595; {this.state.main.temp_min} &#8451;</p>
                <h1>{this.state.main.temp} &#8451;</h1>
                {/*<p>humidity: {this.state.main.humidity}%</p>
                    <p>pressure: {this.state.main.pressure} hPa</p>*/}
            </div>
        )
    }
}