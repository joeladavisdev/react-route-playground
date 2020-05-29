import React, { Component } from "react";

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        }
    }
    toggleGreeting = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <div>
                <h1>Toggle</h1>
                <button onClick={this.toggleGreeting}>Toggle</button>
                <div><h1>{this.state.isToggleOn ? 'Hello' : 'Go away now'}</h1></div>
            </div>

        );
    }
}

export default Toggle