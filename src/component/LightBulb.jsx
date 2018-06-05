import React, { Component } from 'react';

import LightCircuit2 from '../context/context2'


class LightBulb extends Component {
    render() {
      return <div className={'light-bulb' + ' ' + (this.props.valOn ? 'on' : 'off') }></div>
    }
}


export default LightBulb