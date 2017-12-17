// @flow
import React from 'react';

type Props = {
  name: string,
  version: number
};

const Intro = ({ name, version }: Props) => (
  <p className="App-intro">
    <strong>{name}:</strong>{version}
  </p>
);

export default Intro;
