import React, { Component } from 'react';

import LightCircuit2 from '../context/context2'

import LightSwitch from './LightSwitch'


class WallPlateLivingRoom extends Component {
    constructor(props){
        super(props)
        this.state = {up: false}
      }
    render() {
      return <div>
                <LightCircuit2.Consumer>
                    { ({flipSwitch}) => <LightSwitch handleClick={flipSwitch} className="three-way" /> }
                </LightCircuit2.Consumer>
            </div>
    }
}

export default WallPlateLivingRoom