import React from 'react';
import ReactDOM from 'react-dom';
import Repeat from './Repeat';

it('renders the Repeat component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Repeat times="5" value="test" />, div);
});
