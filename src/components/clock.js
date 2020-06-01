import React, { Component } from "react";
import Date from "react-dom";

class Clock extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          isClockOn: true
      }
  }
  tick = () => {
    this.setState(tick => ({
        isClockOn: !prevState.isClockOn
    }));
  }

  render() {
    return (
      <div>
        <h1>Clock</h1>
        <div><h1>{this.props.date.toLocaleTimeString()}</h1></div>
      </div>

    );
  }
}
  
export default Clock


