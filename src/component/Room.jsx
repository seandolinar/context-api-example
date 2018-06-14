import React, { Component } from 'react';

import LightCircuit1 from '../context/context1'
import LightCircuit2 from '../context/context2'

import LightBulb from './LightBulb'


class Room extends Component {
    constructor(props){
        super(props)
        this.state = {up: false}
      }
    render() {
      return <div>
                <LightCircuit1.Consumer>
                    { ({valOn}) => <LightBulb valOn={valOn} /> }
                </LightCircuit1.Consumer>
            </div>
    }
}

export default Room