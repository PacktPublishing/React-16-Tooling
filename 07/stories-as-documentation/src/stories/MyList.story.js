import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import MyList from '../MyList';

storiesOf('MyList', module)
  .add(
    'basic usage',
    withInfo(`
      Without passing any properties
    `)(() => <MyList />)
  )
  .add(
    'passing an array of items',
    withInfo(`
      Passing an array to the items property
    `)(() => <MyList items={['first', 'second', 'third']} />)
  );
