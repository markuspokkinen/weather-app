import React, { Component } from 'react';
import OneDay from './Oneday'
import FiveDays from './Fivedaydiv';
import './ForecastWeather.css';

export default class ForcastWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: [],
            daysArray: [],
            index: 1,
            error: ""
        }
        this.getWeatherdata();

    }

    getWeatherdata = () => {
        fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + this.props.lat + "&lon=" + this.props.lon + "&APPID=9592eb101cb5b0e09de21ab8f991d0c3&units=metric")
            .then(response => response.json())
            .then(res => {
                console.log(res)
                if (res.cod === "200") {
                    var alldays = res.list.map((oneElem) => oneElem.dt_txt.split(" ")[0]);
                    var days = (alldays.filter((v, i) => alldays.indexOf(v) === i));
                    var daysArray = days.map((dayElement) => res.list.filter((listElement) => listElement.dt_txt.includes(dayElement)));

                    days.shift();
                    this.setState({
                        daysArray: daysArray,
                        days: days
                    })
                } else {
                    this.setState({
                        error: res.message
                    })
                }
            });
    }
    fivedayClickCallback = (day) => { this.setState({ index: day + 1 }) }

    render() {
        if (this.state.days.length > 0) {
            return (
                <div id="forcast-main">
                    <h2>Today</h2>
                    <OneDay data={this.state.daysArray[0]} />
                    <h2>Forecast</h2>
                    <FiveDays list={this.state.days} callback={this.fivedayClickCallback.bind(this)} />
                    <OneDay data={this.state.daysArray[this.state.index]} />
                </div>
            )
        } else {
            if (this.state.error === "") {
                return (
                    <div id="forcast-main">
                        <p>Loading current weather data</p>
                        <div className="loader"></div>
                    </div>
                )
            } else {
                return (
                    <div id="forcast-main">
                        <p>{this.state.error}</p>
                    </div>
                )
            }
        }
    }
}