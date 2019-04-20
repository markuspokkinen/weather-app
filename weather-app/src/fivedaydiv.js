import React, { Component } from 'react';
import './fivedaydiv.css';

export default class fivedaydiv extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            five: [],
            index:0
        }
        this.onClick = this.onClick.bind(this);

    }
    componentWillReceiveProps(nextprops) {
        var list = nextprops.list;
        var tmp = list.map((elem) => elem.split("-")[2]);
        var days = tmp.map((elem) => {

            var date = new Date();
            date.setDate(parseInt(elem,10));
            return this.state.weekdays[date.getDay()];

        })
        this.setState({
            list: list,
            weekdays: this.state.weekdays,
            five: days,
        })
    }
    onClick = (event) => {
        event.preventDefault();
        var index = this.state.five.indexOf(event.target.innerText);
        console.log(index)
        this.props.callback(index)
        this.setState({
            list: this.state.list,
            weekdays: this.state.weekdays,
            five: this.state.five,
            index: index
        }, () => {
                console.log(this.state);
            })

    }

    render() {
        var style = { backgroundColor: "rgba(0,0,0,0.4)",borderBottom:0 }
        return (
            <div id="fivedaysdiv">
                {this.state.list.map((element, index) =>
                    <div key={"five[" + index+"]"} className="fivedayOne" onClick={this.onClick} style={this.state.index === index ? style : {}}>
                        <p>{this.state.five[index]}</p>
                    </div>
                    )}

            </div>

        )


    }


}