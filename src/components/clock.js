import React, { Component } from "react";
import Moment from "moment";
import ReactDOM from "react-dom";
import Date from "react-dom";

class Clock extends React.Component {
    render() {
      return (
        <div>
          <h1>Clock</h1>
          <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  
  function tick() {
    ReactDOM.render(
      <Clock date={new Date()} />,
      document.getElementById('root')
    );
  }
  
  setInterval(tick, 1000);

export default Clock