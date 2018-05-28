import React, { Component } from 'react';

import LightCircuit from '../context/context'


class LightBulb extends Component {
    render() {
      return <LightCircuit.Consumer>
                {
                    (context) => <div className={'light-bulb' + ' ' + (context.state.on ? 'on' : 'off') }></div>
                }      
            </LightCircuit.Consumer>
    }
}


export default LightBulb