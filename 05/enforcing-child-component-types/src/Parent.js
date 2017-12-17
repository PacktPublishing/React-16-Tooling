// @flow
import * as React from 'react';
import Child from './Child';

type Props = {
  children: React.ChildrenArray<React.Element<Child>>,
};

const Parent = ({ children }: Props) => (
  <section>
    <h2>Parent</h2>
    {children}
  </section>
);

export default Parent;
