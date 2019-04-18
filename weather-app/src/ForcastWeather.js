import React, { Component } from 'react';
import WeathIm from './weatherImage';
import './forecastWeather.css';

export default class forcastWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{ dt: "", main: {}, weather: [{}], dt_txt: "" }]
        }
        fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + this.props.lat + "&lon=" + this.props.lon + "&APPID=9592eb101cb5b0e09de21ab8f991d0c3&units=metric")
            .then(response => response.json())
            .then(res => {
                this.setState({
                    list: res.list
                });
            });
    }
    componentWillReceiveProps(nextprops) {
        fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + nextprops.lat + "&lon=" + nextprops.lon + "&APPID=9592eb101cb5b0e09de21ab8f991d0c3&units=metric")
            .then(response => response.json())
            .then(res => {
                this.setState({
                    list: res.list
                })
            });

    }
    dateortime = (ent, ind) => {
        if (ind % 2 === 0) {
            return <td>{ent}</td>
        } else {
            return <td>{ent}</td>
        }
    }

    render() {
        return (
            <div id="forcast-maindiv">
                <h2>Forecast</h2>
                <table>
                    {this.state.list.map((ent) =>
                        <tr>
                            {ent.dt_txt.split(" ").map((entry, index) => this.dateortime(entry, index))}
                            <td>{ent.weather[0].main}</td>
                            <td><WeathIm icon={ent.weather[0].icon} /></td>
                            <td> {ent.main.temp} &#8451;</td>
                            <td> max: {ent.main.temp_max} &#8451;</td>
                            <td>min: {ent.main.temp_min} &#8451;</td>

                        </tr>
                    )}
                </table>
            </div>
        )
    }
}
