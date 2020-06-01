import React, { Component } from "react";

class Align extends Component {
    constructor() {
        super();
        this.state = {
            position: "center"
        }
    }

    changeAlign = (newPosition) => {
        this.setState({position: newPosition})
    }
   
    render() {
        return (
            <div>
                <h1>Align</h1>
                <button onClick={() => this.changeAlign("left")}>Left</button>
                <button onClick={() => this.changeAlign("center")}>Center</button>
                <button onClick={() => this.changeAlign("right")}>Right</button>
                <h1 style={{textAlign: this.state.position}}>{this.state.position}</h1>
            </div>
        )
    }
}

export default Align;