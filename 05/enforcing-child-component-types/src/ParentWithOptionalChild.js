// @flow
import * as React from 'react';
import Child from './Child';

type Props = {
  children?: React.Element<Child>,
};

const ParentWithOptionalChild = ({ children }: Props) => (
  <section>
    <h2>Parent With Optional Child</h2>
    {children}
  </section>
);

export default ParentWithOptionalChild;
