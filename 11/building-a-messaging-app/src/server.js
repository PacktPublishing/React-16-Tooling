const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const sessions = [];
const messages = [];
const users = {
  user1: {
    name: 'User 1',
    contacts: ['user2', 'user3', 'user4', 'user5'],
    online: false
  },
  user2: {
    name: 'User 2',
    contacts: ['user1', 'user3', 'user4', 'user5'],
    online: false
  },
  user3: {
    name: 'User 3',
    contacts: ['user1', 'user2', 'user4', 'user5'],
    online: false
  },
  user4: {
    name: 'User 4',
    contacts: ['user1', 'user2', 'user3', 'user5'],
    online: false
  },
  user5: {
    name: 'User 5',
    contacts: ['user1', 'user2', 'user3', 'user4']
  }
};

const authenticate = (req, res, next) => {
  if (!sessions.includes(req.cookies.session)) {
    res.status(403).end();
  } else {
    next();
  }
};

const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/login', (req, res) => {
  const { user } = req.body;

  if (users.hasOwnProperty(user)) {
    sessions.push(user);
    users[user].online = true;
    res.cookie('session', user);
    res.end();
  } else {
    res.status(403).end();
  }
});

app.post('/api/logout', (req, res) => {
  const { session } = req.cookies;
  const index = sessions.indexOf(session);

  sessions.splice(index, 1);
  users[session].online = false;

  res.clearCookie('session');
  res.status(200).end();
});

app.get('/api/user/:id', authenticate, (req, res) => {
  res.json(users[req.params.id]);
});

app.get('/api/contacts', authenticate, (req, res) => {
  res.json(
    users[req.cookies.session].contacts.map(id => ({
      id,
      name: users[id].name,
      online: users[id].online
    }))
  );
});

app.post('/api/messages', authenticate, (req, res) => {
  messages.push({
    from: req.cookies.session,
    fromName: users[req.cookies.session].name,
    to: req.body.to,
    message: req.body.message,
    timestamp: new Date()
  });

  res.status(201).end();
});

app.get('/api/messages', authenticate, (req, res) => {
  res.json(
    messages
      .map((message, id) => ({ ...message, id }))
      .filter(message => message.to === req.cookies.session)
  );
});

app.get('/api/message/:id', authenticate, (req, res) => {
  const { params: { id } } = req;
  res.json({ ...messages[id], id });
});

app.delete('/api/message/:id', authenticate, (req, res) => {
  messages.splice(req.params.id, 1);
  res.status(200).end();
});

app.listen(3001, () =>
  console.log('API server listening on port 3001!')
);
