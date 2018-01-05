// @flow
import * as React from 'react';

type MaybeProps = {
  visible: bool,
  children: React.ChildrenArray<React.Element<any>>
};

type Props = {
  on: boolean,
  toggle: () => void
};

const Maybe = ({ visible, children }: MaybeProps) =>
  visible ? children : null;

const Child = ({ on, toggle }: Props) => (
  <section>
    <Maybe visible={!on}>
      <button onClick={toggle}>On</button>
    </Maybe>
    <Maybe visible={on}>
      <button onClick={toggle}>Off</button>
    </Maybe>
  </section>
);

export default Child;
