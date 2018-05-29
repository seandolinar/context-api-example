import React, { Component } from 'react';
import style from './App.css';

import LightCircuit from './context/context'

import LightBulb from './component/LightBulb'
import LightSwitch from './component/LightSwitch'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {on: false}
  }

  render() {
    return (
      <LightCircuit.Provider value={ {state: this.state, flipSwitch: () => this.setState({on: !this.state.on })} }>
        <div className="App">
          <LightBulb/>
          <div className="space-20"></div>
          <LightSwitch/>     
        </div>
      </LightCircuit.Provider> 
    );
  }
}

export default App;
