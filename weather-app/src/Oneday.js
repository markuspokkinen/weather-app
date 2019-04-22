import React, { Component } from 'react';
import WeatherImages from './WeatherImage';
import './Oneday.css'

export default class Oneday extends Component {

    UTCtoFinnishTime = (string) => { return (parseInt(string.split(":")[0]) + 3) + ":" + string.split(":")[1] + ":" + string.split(":")[2] }

    getwindirection = (deg) => {
        //http://snowfence.umn.edu/Components/winddirectionanddegreeswithouttable3.htm
        var winddirectionanddegrees = [
            { min: 348.75, max: 11.25, val: "N" }, { min: 11.25, max: 33.75, val: "NNE" }, { min: 33.75, max: 56.25, val: "NE" }, { min: 56.25, max: 78.75, val: "ENE" },
            { min: 78.75, max: 101.25, val: "E" }, { min: 101.25, max: 123.75, val: "ESE" }, { min: 123.75, max: 146.25, val: "SE" }, { min: 146.25, max: 168.75, val: "SSE" },
            { min: 168.75, max: 191.25, val: "S" }, { min: 191.25, max: 213.75, val: "SSW" }, { min: 213.75, max: 236.25, val: "SW" }, { min: 236.25, max: 258.75, val: "WSW" },
            { min: 258.75, max: 281.25, val: "W" }, { min: 281.25, max: 303.75, val: "WNW" }, { min: 303.75, max: 326.25, val: "NW" }, { min: 326.25, max: 348.75, val: "NNW" }
        ];
        var winddirection = winddirectionanddegrees.reduce((prevVal, curVal) => {
            if (curVal.min < deg && curVal.max > deg) {
                return curVal.val;
            } else {
                return prevVal;
            }
        })
        return winddirection + ": " + deg;
    }
    render() {
        return (
            <div className="onedaydivmain">
                {this.props.data.map((element) =>
                    <div className="onedaydiv" key={"one: " + element.dt_txt}>
                        <p>{this.UTCtoFinnishTime(element.dt_txt.split(" ")[1])}</p>
                        <WeatherImages icon={element.weather[0].icon} />
                        <p style={{ borderTop: "dashed 1px black" }}>Temp: </p>
                        <p>{Math.round(element.main.temp)}&#8451;</p>
                        <p>&#8593; {element.main.temp_max}&#8451; &#8595;{element.main.temp_min}&#8451;</p>
                        <p style={{ borderTop: "dashed 1px black" }}>Humidity:</p>
                        <p>{element.main.humidity}%</p>
                        <p style={{ borderTop: "dashed 1px black" }}>Wind:</p>
                        <p>{element.wind.speed} m/s</p>
                        <p>{this.getwindirection(element.wind.deg)}&deg;</p>
                    </div>
                )}
            </div>
        );
    }
}