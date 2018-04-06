import React, { Component } from 'react';

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';

import ContactMail from 'material-ui-icons/ContactMail';
import Message from 'material-ui-icons/Message';

import List, {
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction
} from 'material-ui/List';

import EmptyMessage from './EmptyMessage';
import { getContacts } from './api';

const styles = theme => ({
  root: {
    margin: '10px',
    width: '100%',
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper
  }
});

class Home extends Component {
  state = {
    contacts: []
  };

  onMessageClick = id => () => {
    this.props.history.push(`/newmessage/${id}`);
  };

  componentWillMount() {
    const { setTitle, history } = this.props;

    setTitle('Barely SMS');

    const refresh = () =>
      getContacts().then(resp => {
        if (resp.status === 403) {
          history.push('/login');
        } else {
          resp.json().then(contacts => {
            this.setState({
              contacts: contacts.filter(contact => contact.online)
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
    const { contacts } = this.state;
    const { onMessageClick } = this;

    return (
      <Paper className={classes.root}>
        <EmptyMessage coll={contacts}>
          No contacts online
        </EmptyMessage>
        <List component="nav">
          {contacts.map(contact => (
            <ListItem key={contact.id}>
              <ListItemAvatar>
                <Avatar>
                  <ContactMail />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={contact.name} />
              <ListItemSecondaryAction>
                <IconButton onClick={onMessageClick(contact.id)}>
                  <Message />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Paper>
    );
  }
}

export default withStyles(styles)(Home);
