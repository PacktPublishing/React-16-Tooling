import React, { Component } from 'react';

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import Send from 'material-ui-icons/Send';

import { getUser, postMessage } from './api';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 500
  },
  button: {
    width: 500,
    margin: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});

class NewMessage extends Component {
  state = {
    message: ''
  };

  onMessageChange = event => {
    this.setState({
      message: event.target.value
    });
  };

  onSendClick = () => {
    const { match: { params: { id } }, history } = this.props;
    const { message } = this.state;

    postMessage({ to: id, message }).then(() => {
      this.setState({ message: '' });
      history.push('/');
    });
  };

  componentWillMount() {
    const {
      match: { params: { id } },
      setTitle,
      history
    } = this.props;

    getUser(id).then(resp => {
      if (resp.status === 403) {
        history.push('/login');
      } else {
        resp.json().then(user => {
          setTitle(`New message for ${user.name}`);
        });
      }
    });
  }

  render() {
    const { classes } = this.props;
    const { message } = this.state;
    const { onMessageChange, onSendClick } = this;

    return (
      <Paper className={classes.root}>
        <TextField
          id="multiline-static"
          label="Message"
          multiline
          rows="4"
          className={classes.textField}
          margin="normal"
          value={message}
          onChange={onMessageChange}
        />
        <Button
          variant="raised"
          color="primary"
          className={classes.button}
          onClick={onSendClick}
        >
          Send
          <Send className={classes.rightIcon} />
        </Button>
      </Paper>
    );
  }
}

export default withStyles(styles)(NewMessage);
