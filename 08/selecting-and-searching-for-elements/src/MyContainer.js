import React from 'react';
import './MyContainer.css';

const MyContainer = ({ children }) => (
  <section className="MyContainer">
    <header>
      <h1>Container</h1>
    </header>
    <article>{children}</article>
  </section>
);

export default MyContainer;
