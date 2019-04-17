import React, { Component } from 'react';

export default class CurrentWeather extends Component {

    constructor(props) {
        super(props)
        console.log(props.data)
        this.state = {
            weath:this.props.data
        }
    }
    componentWillReceiveProps(nextprops) {
        if (this.props !== nextprops) {
            this.setState({
                weath: nextprops.data
            }, () => { console.log(this.state) })
        }
    }


    render() {
        return (
            <div>
                <p>Current:</p>
                <p> {this.state.weath.name}, {this.state.weath.weather[0].main}</p>
                <p>temp:{this.state.weath.main.temp} C</p>
                <p>humidity: {this.state.weath.main.humidity}</p>
                <p>pressure: {this.state.weath.main.pressure}</p>
                <p>temp max: {this.state.weath.main.temp_max} C</p>
                <p>temp min: {this.state.weath.main.temp_min} C</p>
            </div>
        )
    }
}