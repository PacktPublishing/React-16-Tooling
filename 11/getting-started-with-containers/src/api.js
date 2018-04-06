export const login = body =>
  fetch('/api/login', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    credentials: 'same-origin'
  });

export const logout = user =>
  fetch('/api/logout', {
    method: 'post',
    credentials: 'same-origin'
  });

export const getUser = id =>
  fetch(`/api/user/${id}`, { credentials: 'same-origin' });

export const getContacts = () =>
  fetch('/api/contacts', { credentials: 'same-origin' });

export const getMessages = () =>
  fetch('/api/messages', { credentials: 'same-origin' });

export const getMessage = id =>
  fetch(`/api/message/${id}`, { credentials: 'same-origin' });

export const postMessage = body =>
  fetch('/api/messages', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    credentials: 'same-origin'
  });

export const deleteMessage = id =>
  fetch(`/api/message/${id}`, {
    method: 'delete',
    credentials: 'same-origin'
  });
