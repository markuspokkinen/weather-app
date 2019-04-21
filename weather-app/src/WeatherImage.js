import React, { Component } from 'react';
import './weatherImage.css';

export default class weatherImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: props.icon
        }
    }
    componentWillReceiveProps(nextprops) { this.setState({ icon: nextprops.icon }) }

    render() {
        var animation = "nothing";
        switch (this.state.icon) {
            case '01d':
                animation = "spinner";
                break;
            case '01n':
                animation = "spinner";
                break;
            default:
                break;
        }
        if (this.state.icon !== undefined) {
            return (< img className={animation} src={"https://openweathermap.org/img/w/" + this.state.icon + ".png"} alt="not loaded" />)
        } else {
            return (<div></div>)
        }
    }
}