// @flow
import React, { Component } from 'react';
import Child from './Child';

type State = {
  on: boolean
};

class Container extends Component<{}, State> {
  state = {
    on: false
  }

  toggle = () => {
    this.setState(state => ({
      on: !state.on
    }));
  }

  render() {
    return (
      <Child
        on={this.state.on}
        toggle={this.toggle}
      />);
  }
}

export default Container;
