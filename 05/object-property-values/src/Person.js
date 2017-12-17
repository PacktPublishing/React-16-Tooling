// @flow
import React from 'react';

type Props = {
  person: {
    name: string,
    age: number
  }
};

const Person = ({ person }: Props) => (
  <section>
    <h3>Person</h3>
    <p><strong>Name: </strong>{person.name}</p>
    <p><strong>Age: </strong>{person.age}</p>
  </section>
);

export default Person;
