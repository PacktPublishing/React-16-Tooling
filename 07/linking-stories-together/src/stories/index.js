import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import LinkTo from '@storybook/addon-links/react';
import MyComponent from '../MyComponent';

storiesOf('MyComponent', module)
  .add('default', () => (
    <section>
      <MyComponent />
      <p>
        This is the default. You can also change the{' '}
        <LinkTo story="heading text">heading text</LinkTo>.
      </p>
    </section>
  ))
  .add('heading text', () => (
    <section>
      <MyComponent headingText="Changed Heading!" />
      <p>
        This time, a custom <code>headingText</code> prop changes the
        heading text. You can also pass{' '}
        <LinkTo story="children">child elements</LinkTo> to{' '}
        <code>MyComponent</code>.
      </p>
      <button onClick={linkTo('default')}>Default</button>
    </section>
  ))
  .add('children', () => (
    <section>
      <MyComponent>
        <strong>Child Element</strong>
      </MyComponent>
      <p>
        Passing a child component. You can also change the{' '}
        <LinkTo story="headingText">heading text</LinkTo> of{' '}
        <code>MyComponent</code>.
      </p>
      <button onClick={linkTo('default')}>Default</button>
    </section>
  ));
