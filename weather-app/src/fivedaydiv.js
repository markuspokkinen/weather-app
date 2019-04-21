import React, { Component } from 'react';
import './fivedaydiv.css';

export default class fivedaydiv extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: this.props.list,
            five: this.getfivedays(this.props),
            index:0
        }
        this.onClick = this.onClick.bind(this);

    }
    componentWillReceiveProps(nextprops) {
        this.setState({
            list: nextprops.list,
            five: this.getfivedays(nextprops),
        })
    }
    getfivedays = (props) => {
        var list = props.list;
        var tmp = list.map((elem) => elem.split("-")[2]);
        var days = tmp.map((elem) => {

            var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            var date = new Date();
            date.setDate(parseInt(elem, 10));
            return weekdays[date.getDay()];

        })
        return days;
    }
    onClick = (event) => {
        event.preventDefault();
        var index = this.state.five.indexOf(event.target.innerText);
        //console.log(index)
        this.props.callback(index)

        this.setState({
            index: index
        })

    }

    render() {
        var style = { backgroundColor: "rgba(0,0,0,0.2)", borderRadius:"5px"}
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