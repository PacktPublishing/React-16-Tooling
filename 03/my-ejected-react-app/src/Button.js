import React, { Component } from 'react';

const style = {
  fontWeight: 'bold'
};

class Button extends Component {
  state = {
    count: 0
  }

  onClick = () => this.setState(state => ({
    count: state.count + 1
  }));

  render() {
    const { count } = this.state;
    const { onClick } = this;

    return (
      <button {...{ onClick, style }}>
        Clicks: {count}
      </button>
    );
  }
}

export default Button;
