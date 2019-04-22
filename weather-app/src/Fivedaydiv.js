import React, { Component } from 'react';
import './Fivedaydiv.css';

export default class Fivedaydiv extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: this.props.list,
            five: this.getfivedays(this.props),
            index: 0
        }
    }
    componentWillReceiveProps(nextprops) {
        this.setState({
            list: nextprops.list,
            five: this.getfivedays(nextprops),
        })
    }
    getfivedays = (props) => {
        var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return (props.list.map((listelem) => listelem.split("-")[2])).map((elem) => {
            var date = new Date();
            date.setDate(parseInt(elem, 10));
            return weekdays[date.getDay()];
        });
    }
    onClick = (event) => {
        var index = this.state.five.indexOf(event.target.innerText);
        this.props.callback(index);
        this.setState({
            index: index
        })
    }
    render() {
        var style = { backgroundColor: "rgba(0,0,0,0.2)", borderRadius: "5px" }
        return (
            <div id="fivedaysdiv">
                {this.state.list.map((element, index) =>
                    <div key={"five[" + index + "]"} className="fivedayOne" onClick={this.onClick.bind(this)} style={this.state.index === index ? style : {}}>
                        <p>{this.state.five[index]}</p>
                    </div>
                )}
            </div>
        )
    }
}