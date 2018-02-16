import React, { Component } from 'react';

class MyRangeInput extends Component {
  static defaultProps = {
    onChange() {},
    onRender() {}
  };

  state = { value: 25 };

  onChange = ({ target: { value } }) => {
    this.setState({ value });
    this.props.onChange(value);
  };

  render() {
    const { value } = this.state;
    this.props.onRender(value);
    return (
      <input
        type="range"
        min="1"
        max="100"
        value={value}
        onChange={this.onChange}
      />
    );
  }
}

export default MyRangeInput;
