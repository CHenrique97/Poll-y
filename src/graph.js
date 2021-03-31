import React, { Component } from 'react';
import {Bar} from "react-chartjs-2";
const tmi = require('tmi.js');
const username = 'charliec97';


var occurences=[];

class Graph extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          chartData:{
            labels:['a','n','c'],
            datasets:[
              {
                label:'Chat',
                data:[1,2,3]
              }
            ]
          } 
        }
      }
 

      
  componentWillMount(){
    const client = new tmi.Client({
      connection: {
        secure: true,
        reconnect: true
      },
      channels: [ 'elajjaz' ]
    });
    
    client.connect();
    
    client.on('message', (channel, tags, message, self) => {
      if(message.charAt(0)==='#'){occurences.push(message);}
      
      console.log(message);
      var reduced =occurences.reduce(function(obj, b) {
        obj[b] = ++obj[b] || 1;
        return obj;
      }, {})
      this.setState({
     chartData:{
       labels:Object.keys(reduced),
       datasets:[
         {
           label:'Chat',
           data:Object.values(reduced)
         }
       ]
     } 
   });    
   
 });
}

 render () {

 

    

  
  return (
    <div className="chart">
      <Bar 
      data={this.state.chartData}
      options={{}}      
            />

      </div>
  )
}
}

export default Graph;