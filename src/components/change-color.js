import React, { Component } from "react";

class ChangeColor extends Component {
    constructor() {
        super();

        this.state = {
            color: "",
            newColor: ""
        }
    }
    handleChange = (event) => {
        event.preventDefault()
        this.setState({
            color: event.target.value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            newColor: this.state.color,
            color: ""
        })
    }
    render() {
        return (
            <div>
                <h1>Change-color</h1>
                <form onSubmit = {this.onSubmit} >
                    <input
                    type='text'
                    placeholder= 'Color'
                    onChange={this.handleChange}
                    value={this.state.color}
                    />
                <button type='submit'>Change color</button>
                </form>
                <div style={{color: this.state.newColor}}>
                {this.state.newColor}
                </div>
            </div>
        )
    }
}
export default ChangeColor