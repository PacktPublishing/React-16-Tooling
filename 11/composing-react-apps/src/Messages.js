import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import List, {
  ListItem,
  ListItemAvatar,
  ListItemText
} from 'material-ui/List';

import Message from 'material-ui-icons/Message';

import EmptyMessage from './EmptyMessage';
import { getMessages } from './api';

const styles = theme => ({
  root: {
    margin: '10px',
    width: '100%',
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper
  }
});

class Messages extends Component {
  state = {
    messages: []
  };

  componentWillMount() {
    const { setTitle, history } = this.props;

    setTitle('Messages');

    const refresh = () =>
      getMessages().then(resp => {
        if (resp.status === 403) {
          history.push('/login');
        } else {
          resp.json().then(messages => {
            this.setState({
              messages: messages.map(message => ({
                ...message,
                duration: moment
                  .duration(new Date() - new Date(message.timestamp))
                  .humanize()
              }))
            });
          });
        }
      });

    this.refreshInterval = setInterval(refresh, 5000);
    refresh();
  }

  componentWillUnmount() {
    clearInterval(this.refreshInterval);
  }

  render() {
    const { classes } = this.props;
    const { messages } = this.state;

    return (
      <Paper className={classes.root}>
        <EmptyMessage coll={messages}>No messages</EmptyMessage>
        <List component="nav">
          {messages.map(message => (
            <ListItem
              key={message.id}
              component={Link}
              to={`/messages/${message.id}`}
            >
              <ListItemAvatar>
                <Avatar>
                  <Message />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={message.fromName}
                secondary={`${message.duration} ago`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    );
  }
}

export default withStyles(styles)(Messages);
