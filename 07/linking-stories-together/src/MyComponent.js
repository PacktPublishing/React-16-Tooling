import React from 'react';

const MyComponent = ({ headingText, children }) => (
  <section>
    <header>
      <h1>{headingText}</h1>
    </header>
    <article>{children}</article>
  </section>
);

MyComponent.defaultProps = {
  headingText: 'Heading Text'
};

export default MyComponent;
