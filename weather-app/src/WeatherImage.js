import React, { Component } from 'react';

export default class WeatherImage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            icon: props.id
        }
    }
    componentWillReceiveProps(nextprops) {
        this.setState({
            icon: nextprops.id
        })
    }

    render() {
        return (
            <img src={"https://openweathermap.org/img/w/" + this.state.icon + ".png"} alt="not loaded" />
        )
    }
}