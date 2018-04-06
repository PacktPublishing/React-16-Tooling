import React, { Component } from 'react';

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import List, {
  ListItem,
  ListItemIcon,
  ListItemText
} from 'material-ui/List';

import HomeIcon from 'material-ui-icons/Home';
import MenuIcon from 'material-ui-icons/Menu';
import ContactsIcon from 'material-ui-icons/Contacts';
import MessageIcon from 'material-ui-icons/Message';

import Login from './Login';
import Home from './Home';
import Messages from './Messages';
import Contacts from './Contacts';
import NewMessage from './NewMessage';
import MessageDetails from './MessageDetails';

import { logout } from './api';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class App extends Component {
  state = {
    title: 'Messege App',
    drawer: false
  };

  setTitle = title => {
    this.setState(state => ({
      ...state,
      title: title
    }));
  };

  toggleDrawer = () => {
    this.setState(state => ({
      ...state,
      drawer: !state.drawer
    }));
  };

  onLogoutClick = () => {
    logout().then(() => {
      window.location.reload();
    });
  };

  render() {
    const { classes } = this.props;
    const { title, drawer } = this.state;
    const { setTitle, toggleDrawer, onLogoutClick } = this;

    return (
      <Router>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
                onClick={toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
              <Drawer open={drawer} onClose={toggleDrawer}>
                <div
                  tabIndex={0}
                  role="button"
                  onClick={toggleDrawer}
                  onKeyDown={toggleDrawer}
                >
                  <div>
                    <List>
                      <ListItem button component={Link} to="/">
                        <ListItemIcon>
                          <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                      </ListItem>
                      <ListItem
                        button
                        component={Link}
                        to="/contacts"
                      >
                        <ListItemIcon>
                          <ContactsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Contacts" />
                      </ListItem>
                      <ListItem
                        button
                        component={Link}
                        to="/messages"
                      >
                        <ListItemIcon>
                          <MessageIcon />
                        </ListItemIcon>
                        <ListItemText primary="Messages" />
                      </ListItem>
                    </List>
                  </div>
                </div>
              </Drawer>
              <Typography
                variant="title"
                color="inherit"
                className={classes.flex}
              >
                {title}
              </Typography>
              <Button color="inherit" onClick={onLogoutClick}>
                Logout
              </Button>
            </Toolbar>
          </AppBar>
          <Route
            exact
            path="/"
            render={props => <Home {...props} {...{ setTitle }} />}
          />
          <Route
            exact
            path="/messages"
            render={props => (
              <Messages {...props} {...{ setTitle }} />
            )}
          />
          <Route
            exact
            path="/messages/:id"
            render={props => (
              <MessageDetails {...props} {...{ setTitle }} />
            )}
          />
          <Route
            exact
            path="/contacts"
            render={props => (
              <Contacts {...props} {...{ setTitle }} />
            )}
          />
          <Route
            exact
            path="/login"
            render={props => <Login {...props} {...{ setTitle }} />}
          />
          <Route
            exact
            path="/newmessage/:id"
            render={props => (
              <NewMessage {...props} {...{ setTitle }} />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(App);
