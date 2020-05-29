import React, { Component } from "react";

class ShowHide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isViewOn: true
        }
    }
    toggleView = () => {
        this.setState(prevState => ({
            isViewOn: !prevState.isViewOn
        }));
    }

    render() {
        return (
            <div>
                <h1>Show/Hide</h1>
                <button onClick={this.toggleView}>{this.state.isViewOn ? 'Hide' : 'Show' }</button>
                <div><h1>{this.state.isViewOn ? 'Hello' : ''}</h1></div>
                <div style={{display: this.state.isViewOn ? 'block' : 'none'}}><h1>Hi there</h1></div>
            </div>

        );
    }
}

export default ShowHide;