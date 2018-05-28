import React, { Component } from 'react';
import style from './App.css';

import LightCircuit from './context/context'
import LightBulb from './component/LightBulb'
import LightSwitch from './component/LightSwitch'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {on: true}
  }

  render() {
    return (
      <LightCircuit.Provider value={ {state: this.state, helpMe: () => this.setState({on: !this.state.on })} }>
        <div className="App">
          <LightSwitch/>
          <LightBulb/>        
        </div>
      </LightCircuit.Provider>
    );
  }
}

export default App;
