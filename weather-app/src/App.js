import React, { Component } from 'react';
import Forecast from './ForcastWeather.js';
import Current from './CurrentWeather.js';

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
                navigator.geolocation.watchPosition(this.setpos, this.error, { enableHighAccuracy:true })
        }

        setpos = (position) => {
            this.setState({
                lat: position.coords.latitude,
                lon: position.coords.longitude
            })
    }
    error = (err) => {
        alert(err)
    }

        render() {
            return (
                <div id="App">
                    <Current lat={this.state.lat} lon={this.state.lon} />
                    <Forecast lat={this.state.lat} lon={this.state.lon}/>
                </div>
            );
        }
    }
