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
        this.getWeatherdata(this.props);
    }
    componentWillReceiveProps(nextprops) {
        this.getWeatherdata(nextprops);
    }
    getWeatherdata = (data) => {
        fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + data.lat + "&lon=" + data.lon + "&APPID=9592eb101cb5b0e09de21ab8f991d0c3&units=metric")
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
        //console.log(this.state);
        return (
            <div id="current-div">
                <h2> {this.state.name} </h2>
                <h1>{Math.round(this.state.main.temp)} &#8451;</h1>
                <CurWeathIm icon={this.state.weather[0].icon} />
                <div id="otherCurrentdata">
                    <p>&#8593; {Math.round(this.state.main.temp_max)} &#8451; &#8595; {Math.round(this.state.main.temp_min)} &#8451;</p>
                    <p>humidity: {this.state.main.humidity}%</p>
                    <p>pressure: {this.state.main.pressure} hPa</p>
                </div>
            </div>
        )
    }
}