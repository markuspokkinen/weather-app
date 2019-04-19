import React, { Component } from 'react';
import OneDay from './oneday';
import './forecastWeather.css';
import FiveDays from './fivedaydiv';

export default class forcastWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
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
                //console.log(list);
                var alldays = list.map((oneElem) => oneElem.dt_txt.split(" ")[0]);
                var days = alldays.filter((v, i) => alldays.indexOf(v) === i);
                var daysArray = [];
                //console.log(days);

                for (var i = 0; i < days.length; i++) {
                    var element = [];
                    for (var x = 0; x < list.length; x++) {
                        if (list[x].dt_txt.includes(days[i])) {
                            element.push(list[x]);
                        }
                    }
                    daysArray.push(element);
                }
                days.shift();
                this.setState({
                    list: res.list,
                    daysArray: daysArray,
                    days: days
                })
            });

    }
    daycallback = (day) => {
        this.setState({
            list: this.state.list,
            daysArray: this.state.daysArray,
            days: this.state.days,
            index:day
        })
    }
    render() {
        return (
            <div id="forcast-main">
                <h2>Today</h2>
                <OneDay data={this.state.daysArray[0]} />
                <h2>Forecast</h2>
                <FiveDays list={this.state.days} callback={this.daycallback.bind(this)} />
                <OneDay data={this.state.daysArray[this.state.index]} />
            </div>
        )
    }
}
