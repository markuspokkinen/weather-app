import React, { Component } from 'react';
import Forecast from './forcastWeather';
import Current from './currentWeather';
import './App.css';

/**
 * Images
 * sun url(https://www.gannett-cdn.com/-mm-/481602f6d9edcd4edf3b3b8a2ff6d2d98ae8eb24/c=0-0-507-286/local/-/media/MIGroup/PortHuron/2014/09/16/1410873237000-SUNNY.jpg?width=3200&height=1680&fit=crop)
 * rain url(http://www.pxleyes.com/images/contests/rainy-weather/fullsize/rainy-weather-570e98ac5c258_hires.jpg)
 * lightning url(https://www.desktop-background.com/download/o/2014/11/02/849556_storm-weather-rain-sky-clouds-nature-lightning-wallpapers_2880x1800_h.jpg)
 * dark clouds url(https://jooinn.com/images/storm-clouds-44.jpg)
 * */

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 0,
            lon: 0,
            weather: ""
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
        );

    }
}
