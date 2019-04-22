import React, { Component } from 'react';
import './OtherCurrentdata.css'

export default class OtherCurrentdata extends Component {
    render() {
        return (
            <div id="otherCurrentdata">
                <p>&#8593; {this.props.main.temp_max} &#8451; &#8595; {this.props.main.temp_min} &#8451;</p>
                <p>humidity: {this.props.main.humidity}%</p>
                <p>pressure: {this.props.main.pressure} hPa</p>
            </div>
        );
    }
}