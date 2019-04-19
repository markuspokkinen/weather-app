import React, { Component } from 'react';
import WeathIm from './weatherImage';
import OneDay from './oneday';
import './forecastWeather.css';

export default class forcastWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{ dt: "", main: {}, weather: [{}], dt_txt: "" }],
            days: [{}]
        }
        this.getWeatherdata();
    }
    componentWillReceiveProps(nextprops) {
        this.getWeatherdata();

    }
    getWeatherdata() {
        fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + this.props.lat + "&lon=" + this.props.lon + "&APPID=9592eb101cb5b0e09de21ab8f991d0c3&units=metric")
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

                console.log(daysArray);

                this.setState({
                    list: res.list,
                    days: daysArray
                })
            });

    }
    dateortimefunc = (ent, ind) => {
        if (ind % 2 === 0) {
            return <td key={"date: [" + ind + "]"}>{ent}</td>
        } else {
            return <td key={"time: [" + ind + "]"}>{ent}</td>
        }
    }

    render() {
        return (
            <div id="forcast-main">

                <table>
                    <thead>
                        <tr>
                            <th colSpan="100000"><h2>Today</h2></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {this.state.list.map((entry) => {
                                return <td key={entry.dt_txt}>
                                    {entry.dt_txt}



                                </td>
                            })


                            }
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colSpan="100000"><h2>Forecast</h2></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.list.map((ent) =>
                            <tr key={"table:" + ent.dt_txt}>
                                {ent.dt_txt.split(" ").map((entry, index) => this.dateortimefunc(entry, index))}
                                <td>{ent.weather[0].main}</td>
                                <td><WeathIm icon={ent.weather[0].icon} /></td>
                                <td> {Math.round(ent.main.temp)} &#8451;</td>
                                <td> max: {Math.round(ent.main.temp_max)} &#8451;</td>
                                <td>min: {Math.round(ent.main.temp_min)} &#8451;</td>

                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
