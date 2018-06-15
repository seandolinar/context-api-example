import React, { Component } from 'react';

import LightCircuit1 from '../context/context1'
import LightCircuit2 from '../context/context2'

import LightSwitch from './LightSwitch'


class WallPlateLivingRoom extends Component {
    constructor(props){
        super(props)
        this.state = {up: false}
      }
    render() {
      return <div>
                <LightCircuit1.Consumer>
                    { ({flipSwitch}) => <LightSwitch handleClick={flipSwitch} /> }
                </LightCircuit1.Consumer>
                <LightCircuit2.Consumer>
                    { ({flipSwitch}) => <LightSwitch handleClick={flipSwitch} className="three-way" /> }
                </LightCircuit2.Consumer>
            </div>
    }
}

export default WallPlateLivingRoom