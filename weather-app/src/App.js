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
        }
    }
    componentDidMount() {
        if (navigator.geolocation)
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                })
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
            return (
                <div>
                </div>
                )
        }
    }
}