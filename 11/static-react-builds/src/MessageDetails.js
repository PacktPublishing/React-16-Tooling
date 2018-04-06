import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import Delete from 'material-ui-icons/Delete';
import Reply from 'material-ui-icons/Reply';

import { getMessage, deleteMessage } from './api';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column'
  },
  message: {
    width: 500,
    margin: theme.spacing.unit
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
    message: {}
  };

  onDeleteClick = () => {
    const { history, match: { params: { id } } } = this.props;

    deleteMessage(id).then(() => {
      history.push('/messages');
    });
  };

  componentWillMount() {
    const {
      match: { params: { id } },
      setTitle,
      history
    } = this.props;

    getMessage(id).then(resp => {
      if (resp.status === 403) {
        history.push('/login');
      } else {
        resp.json().then(message => {
          setTitle(`Message from ${message.fromName}`);
          this.setState({ message });
        });
      }
    });
  }

  render() {
    const { classes } = this.props;
    const { message } = this.state;
    const { onDeleteClick } = this;

    return (
      <Paper className={classes.root}>
        <Typography className={classes.message}>
          {message.message}
        </Typography>
        <Button
          variant="raised"
          color="primary"
          className={classes.button}
          component={Link}
          to={`/newmessage/${message.from}`}
        >
          Reply
          <Reply className={classes.rightIcon} />
        </Button>
        <Button
          variant="raised"
          color="primary"
          className={classes.button}
          onClick={onDeleteClick}
        >
          Delete
          <Delete className={classes.rightIcon} />
        </Button>
      </Paper>
    );
  }
}

export default withStyles(styles)(NewMessage);
