// @flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Parent from './Parent';
import ParentWithOneChild from './ParentWithOneChild';
import ParentWithOptionalChild from './ParentWithOptionalChild';
import ParentWithStringOrNumberChild from './ParentWithStringOrNumberChild';
import Child from './Child';

class App extends Component<{}> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Parent>
          <Child />
          <Child />
        </Parent>
        <ParentWithOneChild>
          <Child />
        </ParentWithOneChild>
        <ParentWithOptionalChild />
        <ParentWithStringOrNumberChild>
          Child String
        </ParentWithStringOrNumberChild>
      </div>
    );
  }
}

export default App;
