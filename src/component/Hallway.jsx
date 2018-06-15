import React, { Component } from 'react';

import LightCircuit2 from '../context/context2'

import LightBulb from './LightBulb'


class Room extends Component {
    constructor(props){
        super(props)
      }
    render() {
      return <div>
                <LightCircuit2.Consumer>
                    { ({valOn}) => <LightBulb valOn={valOn} /> }
                </LightCircuit2.Consumer>
            </div>
    }
}

export default Room