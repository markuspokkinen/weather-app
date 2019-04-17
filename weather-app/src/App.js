import React, { Component } from 'react';
import Forecast from './ForcastWeather.js';
import Current from './CurrentWeather.js';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curWeath: {
                name: "",
                weather: [{}],
                main: {}
            },
            forcWeath: { list: [{}]}
        }
    }

    componentDidMount() {
        if (navigator.geolocation)
            navigator.geolocation.getCurrentPosition(this.getdata)
        else {
            this.getdata({ position: { coords: {latitude:0,longtitude:0}}})
        }
    }

    getdata = (position) => {

        fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&APPID=9592eb101cb5b0e09de21ab8f991d0c3&units=metric")
            .then(res => res.json())
            .then(res => {
                this.setState({
                    curWeath: res,
                    forcWeath: this.state.forcWeath
                })
            })
        fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&APPID=9592eb101cb5b0e09de21ab8f991d0c3&units=metric")
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        curWeath: this.state.curWeath,
                        forcWeath: res
                    }, () => { console.log(this.state) })
                });
        
    }

  render() {
    return (
        <div className="App">
            <Current data={this.state.curWeath} />
            <Forecast data={this.state.forcWeath} />
      </div>
    );
  }
}
