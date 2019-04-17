import React, { Component } from 'react';
import ImageViewer from './WeatherImage.js';
import './ForecastWeather.css';

export default class ForcastWeather extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [{ dt: "", main: {}, weather: [{}], dt_txt: " " }]
        }
    }
    componentWillReceiveProps(nextprops) {
        fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + nextprops.lat + "&lon=" + nextprops.lon + "&APPID=9592eb101cb5b0e09de21ab8f991d0c3&units=metric")
            .then(res => res.json())
            .then(res => {
                this.setState({
                    list: res.list
                }, () => { console.log(this.state) })
            });

    }
    dateortime = (ent, ind) => {
        if (ind % 2 === 0) {
            return <p key={"date" + ind}>date: {ent}</p>
        } else {
            return <p key={"time" + ind}>time: {ent}</p>
        }
    }

    render() {
        return (
            <div id="forcast-div">
                {this.state.list.map((ent) =>
                    <div className="forcast-data" key={ent.dt}>
                        <div>
                            {ent.dt_txt.split(" ").map((ent1, ind) =>
                                this.dateortime(ent1, ind)
                            )}
                        </div>
                        <div>
                            <p>weather: </p>
                            <p>{ent.weather[0].main}</p>
                            <ImageViewer id={ent.weather[0].icon} />
                        </div>
                        <div>
                            <p>humidity: </p>
                            <p>{ent.main.humidity}%</p>
                        </div>
                        <div>
                            <p>pressure:</p>
                            <p> {ent.main.pressure}</p>
                        </div>
                        <div>
                            <p>temp:</p>
                            <p> {ent.main.temp} C</p>
                        </div>
                        <div>
                            <p>temp max: </p>
                            <p>{ent.main.temp_max} C</p>
                        </div>
                        <div>
                            <p>temp min: </p>
                            <p>{ent.main.temp_min} C</p>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}
