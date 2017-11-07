import React, { Component } from 'react';

class Button extends Component {
  style = {
    fontWeight: 'bold'
  }

  state = {
    count: 0
  }

  onClick = () => this.setState(state => ({
    count: state.count + 1
  }));

  render() {
    const { count } = this.state;
    const {
      onClick,
      style
    } = this;

    return (
      <button {...{ onClick, style }}>
        Clicks: {count}
      </button>
    );
  }
}

export default Button;
