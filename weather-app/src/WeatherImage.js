import React, { Component } from 'react';
import './WeatherImage.css';

export default class WeatherImage extends Component {

    render() {
        var animation = "nothing";
        switch (this.props.icon) {
            case '01d':
                animation = "spinner";
                break;
            case '01n':
                animation = "spinner";
                break;
            default:
                break;
        }
        if (this.props.icon !== undefined) {
            return (< img className={animation} src={"https://openweathermap.org/img/w/" + this.props.icon + ".png"} alt="not loaded" />)
        } else { return (<div></div>) }
    }
}