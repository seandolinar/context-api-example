import React, { Component } from 'react';

import LightCircuit from '../context/context'


class LightSwitch extends Component {
    render() {
      return <LightCircuit.Consumer>
                {
                    (context) => <button onClick={context.helpMe}>{context.state.on ? 'on' : 'off'}</button>
                }      
            </LightCircuit.Consumer>
    }
}

export default LightSwitch