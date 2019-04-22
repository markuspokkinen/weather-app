import React, { Component } from 'react';
import Forecast from './ForcastWeather';
import Current from './CurrentWeather';
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 0,
            lon: 0,
            err: ""
        }
    }
    componentDidMount() {
        if (navigator.geolocation)
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                })
            }, (err) => {
                this.setState({
                    err: "denied"
                })

                console.log(err)
            });
    }
    render() {
        if (this.state.lat !== 0 & this.state.lon !== 0) {
            return (
                <div id="app">
                    <Current lat={this.state.lat} lon={this.state.lon} />
                    <Forecast lat={this.state.lat} lon={this.state.lon} />
                </div>
            )
        } else {
            if (this.state.err === "denied") {
                return (

                    <div id="app">
                        <p>Can't show weather data without user position</p>
                    </div>
                )
            } else {
                return (
                    <div id="app">
                        <p>Loading User Position</p>
                    </div>
                )
            }
        }
    }
}