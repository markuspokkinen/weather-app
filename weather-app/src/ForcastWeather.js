import React, { Component } from 'react';
import OneDay from './oneday';
import './forecastWeather.css';
import FiveDays from './fivedaydiv';

export default class forcastWeather extends Component {
    constructor(props) {
       // console.log(props)
        super(props);
        this.state = {
            days:[],
            daysArray: [],
            index: 1
        }
        this.getWeatherdata(this.props);
        
    }
    componentWillReceiveProps(nextprops) {
        this.getWeatherdata(nextprops);
    }
    getWeatherdata = (data) =>{
        fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + data.lat + "&lon=" + data.lon + "&APPID=9592eb101cb5b0e09de21ab8f991d0c3&units=metric")
            .then(response => response.json())
            .then(res => {
                var list = res.list;
               // console.log(list);
                var alldays = list.map((oneElem) => oneElem.dt_txt.split(" ")[0]);
                var days = alldays.filter((v, i) => alldays.indexOf(v) === i);
                var daysArray = days.map((dayElement) => list.filter((listElement) => listElement.dt_txt.includes(dayElement)));

                days.shift();
                this.setState({
                    daysArray: daysArray,
                    days: days
                })

            });

    }
    daycallback = (day) => {
        this.setState({
            index:day+1
        })
    }
    render() {
        if (this.state.daysArray.length > 0) {
            return (
                <div id="forcast-main">
                    <h2>Today</h2>
                    <OneDay data={this.state.daysArray[0]} />
                    <h2>Forecast</h2>
                    <FiveDays list={this.state.days} callback={this.daycallback.bind(this)} />
                    <OneDay data={this.state.daysArray[this.state.index]} />
                </div>
            )
        } else {
            return (
                <div>
                </div>
                )
        }
    }
}
