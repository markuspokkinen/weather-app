import React, { Component } from 'react';

export default class weatherImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            icon: props.icon
        }
    }
    componentWillReceiveProps(nextprops) {
        if (this.state.icon !== nextprops.icon) {
            this.setState({
                icon: nextprops.icon
            })
        }
    }

    render() {
        return (
            <div>
                {< img src = { "https://openweathermap.org/img/w/" + this.state.icon + ".png" } alt = "not loaded" />}
            </div>
        )
    }
}