import React, { Component } from 'react';
import WeathIm from './weatherImage';
import './oneday.css'

export default class oneday extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            
        };
    }
    componentWillReceiveProps(nextprops) {
        this.setState({
            list: nextprops.data
        });

    }

    render() {
        return (
            <div className="dayDiv">
                {this.state.list.map((element) =>
                    <div className="onedayDiv" key={"one" + element.dt_txt}>
                        <p>{element.dt_txt.split(" ")[1]}</p>
                        <WeathIm icon={element.weather[0].icon} />
                        <p>{Math.round(element.main.temp)}&#8451;</p>
                        <p>&#8593; {Math.round(element.main.temp_max)}&#8451; &#8595;{element.main.temp_min}&#8451;</p>
                        <p>{element.main.humidity}%</p>
                        <p>{element.wind.speed} m/s</p>
                        <p>{element.wind.deg}&deg;</p>
                        <p>{element.main.pressure} hPa</p>
                    </div>
                )}
            </div>
        );
    }

}