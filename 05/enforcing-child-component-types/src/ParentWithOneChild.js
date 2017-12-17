// @flow
import * as React from 'react';
import Child from './Child';

type Props = {
  children: React.Element<Child>,
};

const ParentWithOneChild = ({ children }: Props) => (
  <section>
    <h2>Parent With One Child</h2>
    {children}
  </section>
);

export default ParentWithOneChild;
