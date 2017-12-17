// @flow
import * as React from 'react';

type Props = {
  children?: React.ChildrenArray<string|boolean>,
};

const ParentWithStringOrNumberChild = ({ children }: Props) => (
  <section>
    <h2>Parent With String or Number Child</h2>
    {children}
  </section>
);

export default ParentWithStringOrNumberChild;
