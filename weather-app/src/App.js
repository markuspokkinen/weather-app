import React, { Component } from 'react';
import logo from './logo.svg';
import Forecast from './ForcastWeather.js';
import Current from './CurrentWeather.js';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

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
        console.log(position)
        let curWeath;
        let forcWeath;

        fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&APPID=9592eb101cb5b0e09de21ab8f991d0c3&units=metric")
            .then(res => res.json())
            .then(res => {
                console.log(res)
                curWeath = res;
            }).then(res => fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude +"&APPID=9592eb101cb5b0e09de21ab8f991d0c3&units=metric")
            .then(res => res.json())
            .then(res => {
                console.log(res)
                forcWeath = res;

                })).then(res => {

                    this.setState({
                        curWeath: curWeath,
                        forcWeath: forcWeath
                    }, () => {
                        console.log(this.state)
                    });
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
