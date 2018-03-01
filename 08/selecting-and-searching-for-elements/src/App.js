import React from 'react';
import MyContainer from './MyContainer';
import MyChild from './MyChild';

const App = () => (
  <MyContainer>
    <MyChild>child text</MyChild>
  </MyContainer>
);

export default App;
