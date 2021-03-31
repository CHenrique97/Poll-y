

import React, { Component } from 'react';
import Graph from './graph';
//import { LiveBarChart } from 'react-dynamic-charts';
//import 'react-dynamic-charts/dist/index.css'; // Don't forget to import the styles

//var twitchData = require('./data.js');
//const token = twitchData.twitchData.oauth;
const username = 'charliec97';
const tmi = require('tmi.js');
class App extends Component {


state = {
  data: [
    // ...
  ]
};

render () {

  return (
    <Graph/>
  )
}
}

export default App;
