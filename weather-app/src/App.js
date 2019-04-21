import React, { Component } from 'react';
import Forecast from './forcastWeather';
import Current from './currentWeather';
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
        return (
            <div id="app">
                <Current lat={this.state.lat} lon={this.state.lon} />
                <Forecast lat={this.state.lat} lon={this.state.lon} />
            </div>
        )
    }
}