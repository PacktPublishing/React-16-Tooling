// @flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from './Intro';

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Intro name="React" version={16} />
      </div>
    );
  }
}

export default App;
