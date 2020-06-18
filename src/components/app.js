import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import NavigationContainer from '../navigation/navigation-container';
import Home from './home';
import Align from './align';
import ChangeColor from './change-color';
import Clock from './clock';
import Counter from './counter';
import FontSizer from './font-sizer';
import ShowHide from './show-hide';
import Toggle from './toggle';
import FetchData from './fetch-data';


function App() {
  return (
    <Router>
    <NavigationContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/align" component={Align} />
        <Route path="/change-color" component={ChangeColor} />
        <Route path="/clock" component={Clock} />
        <Route path="/counter" component={Counter} />
        <Route path="/font-sizer" component={FontSizer} />
        <Route path="/show-hide" component={ShowHide} />
        <Route path="/toggle" component={Toggle} />
        <Route path="/fetch-data" component={FetchData} />
      </Switch>
    </Router>  )
}

export default App;