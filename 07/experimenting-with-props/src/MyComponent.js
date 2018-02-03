import React from 'react';

const MyComponent = ({ title, content, titleStyle, contentStyle }) => (
  <section>
    <heading>
      <h2 style={titleStyle}>{title}</h2>
    </heading>
    <article style={contentStyle}>{content}</article>
  </section>
);

export default MyComponent;
