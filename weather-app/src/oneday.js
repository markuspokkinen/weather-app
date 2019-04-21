import React, { Component } from 'react';
import WeathIm from './weatherImage';
import './oneday.css'

export default class oneday extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: this.props.data
        };
    }
    componentWillReceiveProps(nextprops) { this.setState({ list: nextprops.data }) }

    addtime = (string) => { return (parseInt(string.split(":")[0]) + 3) + ":" + string.split(":")[1] + ":" + string.split(":")[2] }

    getwindirec = (deg) => {
        var winddeg = [
            { min: 348.75, max: 11.25 }, { min: 11.25, max: 33.75 }, { min: 33.75, max: 56.25 }, { min: 56.25, max: 78.75 },
            { min: 78.75, max: 101.25 }, { min: 101.25, max: 123.75 }, { min: 123.75, max: 146.25 }, { min: 146.25, max: 168.75 },
            { min: 168.75, max: 191.25 }, { min: 191.25, max: 213.75 }, { min: 213.75, max: 236.25 }, { min: 236.25, max: 258.75 },
            { min: 258.75, max: 281.25 }, { min: 281.25, max: 303.75 }, { min: 303.75, max: 326.25 }, { min: 326.25, max: 348.75 }
        ];
        var winddir = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        var ind;
        winddeg.forEach((element, index) => {
            if (element.min < deg && element.max > deg) {
                ind = index;
            }
        })
        return winddir[ind] + ": " + deg;
    }
    render() {
        console.log(this.state)
        return (
            <div className="dayDiv">
                {this.state.list.map((element) =>
                    <div className="onedayDiv" key={"one: " + element.dt_txt}>
                        <p>{this.addtime(element.dt_txt.split(" ")[1])}</p>
                        <WeathIm icon={element.weather[0].icon} />
                        <p style={{ borderTop: "dashed 1px black" }}>Temp: </p>
                        <p>{Math.round(element.main.temp)}&#8451;</p>
                        <p>&#8593; {element.main.temp_max}&#8451; &#8595;{element.main.temp_min}&#8451;</p>
                        <p style={{ borderTop: "dashed 1px black" }}>Humidity:</p>
                        <p>{element.main.humidity}%</p>
                        <p style={{ borderTop: "dashed 1px black" }}>Wind:</p>
                        <p>{element.wind.speed} m/s</p>
                        <p>{this.getwindirec(element.wind.deg)}&deg;</p>
                    </div>
                )}
            </div>
        );
    }
}