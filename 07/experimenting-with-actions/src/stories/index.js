import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MyButton from '../MyButton';
import MyRangeInput from '../MyRangeInput';

storiesOf('MyButton', module).add('clicks', () => (
  <MyButton onClick={action('my component clicked')} />
));

storiesOf('MyRangeInput', module).add('slides', () => (
  <MyRangeInput
    onChange={action('range input changed')}
    onRender={action('range input rendered')}
  />
));
