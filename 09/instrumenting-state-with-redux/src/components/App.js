import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import NewBook from './NewBook';
import BookDetails from './BookDetails';

class App extends Component {
  render() {
    const { title } = this.props;

    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">{title}</h1>
          </header>
          <section className="Layout">
            <nav>
              <NavLink
                exact
                to="/"
                activeStyle={{ fontWeight: 'bold' }}
              >
                Home
              </NavLink>
              <NavLink to="/new" activeStyle={{ fontWeight: 'bold' }}>
                New Book
              </NavLink>
            </nav>
            <section>
              <Route exact path="/" component={Home} />
              <Route exact path="/new" component={NewBook} />
              <Route
                exact
                path="/book/:title"
                component={BookDetails}
              />
            </section>
          </section>
        </div>
      </Router>
    );
  }
}

const mapState = state => state.app;
const mapDispatch = dispatch => ({});
export default connect(mapState, mapDispatch)(App);
