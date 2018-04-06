import React, { Component } from 'react';

import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import { login } from './api';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  }
});

class Login extends Component {
  state = {
    user: '',
    password: ''
  };

  onInputChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  onLoginClick = () => {
    login(this.state).then(resp => {
      if (resp.status === 200) {
        this.props.history.push('/');
      }
    });
  };

  componentWillMount() {
    this.props.setTitle('Login');
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <TextField
          id="user"
          label="User"
          className={classes.textField}
          value={this.state.user}
          onChange={this.onInputChange('user')}
          margin="normal"
        />
        <TextField
          id="password"
          label="Password"
          className={classes.textField}
          value={this.state.password}
          onChange={this.onInputChange('password')}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
        <Button
          variant="raised"
          color="primary"
          className={classes.button}
          onClick={this.onLoginClick}
        >
          Login
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
