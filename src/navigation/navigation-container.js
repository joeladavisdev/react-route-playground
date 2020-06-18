import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavigationContainer extends Component {
    render() {
        return (
            <div className="nav-wrapper">
                <ul>
                    <li>
                        <NavLink exact to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="./clock">Clock</NavLink>
                    </li>
                    <li>
                        <NavLink to="/counter">Counter</NavLink>
                    </li>
                    <li>
                        <NavLink to="/toggle">Toggle</NavLink>
                    </li>
                    <li>
                        <NavLink to="/align">Align</NavLink>
                    </li>
                    <li>
                        <NavLink to="/change-color">Change Color</NavLink>
                    </li>
                    <li>
                        <NavLink to="/font-sizer">Font Sizer</NavLink>
                    </li>
                    <li>
                        <NavLink to="/show-hide">Show Hide</NavLink>
                    </li>
                    <li>
                        <NavLink to="/fetch-data">Fetch Data</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavigationContainer