import React, { Component } from 'react';

class LightSwitch extends Component {
    constructor(props){
        super(props)
        this.state = {up: false}
      }
    render() {

        const handleClick = () => {
                                    this.setState({up: !this.state.up})
                                    this.props.handleClick()
                                }

        return <button 
                    onClick={handleClick} 
                    className={'light-switch' + 
                                (this.state.up ? ' up' : ' down') +
                                ' ' + this.props.className }><div>Off</div></button>
        }
}

export default LightSwitch