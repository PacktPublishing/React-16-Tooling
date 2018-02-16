import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import MyButton from '../MyButton';

storiesOf('MyButton', module)
  .add(
    'basic usage',
    withInfo(`
      Without passing any properties
    `)(() => <MyButton />)
  )
  .add(
    'click handler',
    withInfo(`
      Passing an event handler function that's called when
      the button is clicked
    `)(() => <MyButton onClick={action('button clicked')} />)
  );
