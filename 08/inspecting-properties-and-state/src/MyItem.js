import React from 'react';

const MyItem = ({ label, strikethrough, onClick }) => (
  <li
    style={{
      cursor: 'pointer',
      textDecoration: strikethrough ? 'line-through' : 'none'
    }}
    onClick={onClick}
  >
    {label}
  </li>
);

export default MyItem;
