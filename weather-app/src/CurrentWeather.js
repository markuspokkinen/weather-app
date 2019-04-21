import React, { Component } from 'react';
import CurWeathIm from './weatherImage';
import OtherCurData from './otherCurrentdata';
import './currentWeather.css'

export default class currentWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            weather: [{}],
            main: {}
        }
        this.getWeatherdata(this.props);
    }
    componentWillReceiveProps(nextprops) { this.getWeatherdata(nextprops) }

    getWeatherdata = (props) => {
        fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + props.lat + "&lon=" + props.lon + "&APPID=9592eb101cb5b0e09de21ab8f991d0c3&units=metric")
            .then(response => response.json())
            .then(res => {
                //console.log(res);
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
                <h2> {this.state.name} </h2>
                <h1>{Math.round(this.state.main.temp)} &#8451;</h1>
                <CurWeathIm icon={this.state.weather[0].icon} />
                <OtherCurData main={this.state.main} />
            </div>
        )
    }
}