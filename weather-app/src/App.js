import React, { Component } from 'react';
import Forecast from './forcastWeather';
import Current from './currentWeather';
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lati: 0,
            longt: 0
        }
    }

    componentDidMount() {
        if (navigator.geolocation)
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    lati: position.coords.latitude,
                    longt: position.coords.longitude
                })
            });
    }

    render() {
        return (
            <div id="app">
                <Current lat={this.state.lati} lon={this.state.longt} />
                {<Forecast lat={this.state.lati} lon={this.state.longt} />}

            </div>
        );

    }
}
