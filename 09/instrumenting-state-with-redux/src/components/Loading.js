import React from 'react';

const Loading = ({ loading, children }) =>
  loading ? <p>loading...</p> : children;

export default Loading;
