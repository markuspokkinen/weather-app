import React, { Component } from 'react';
import './otherCurrentdata.css'

export default class otherCurrentdata extends Component {
    constructor(props) {
        super(props);
        this.state = {
            main: this.props.main
        }
    }
    componentWillReceiveProps(nextprops) { this.setState({ main: nextprops.main }) }

    render() {
        return (
            <div id="otherCurrentdata">
                <p>&#8593; {this.state.main.temp_max} &#8451; &#8595; {this.state.main.temp_min} &#8451;</p>
                <p>humidity: {this.state.main.humidity}%</p>
                <p>pressure: {this.state.main.pressure} hPa</p>
            </div>
        );

    }

}