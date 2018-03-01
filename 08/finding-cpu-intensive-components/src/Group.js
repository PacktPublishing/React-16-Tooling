import React from 'react';

const Group = ({ name, members, onAddMemberClick }) => (
  <section>
    <h4>{name}</h4>
    <button onClick={onAddMemberClick}>Add Member</button>
    <ul>{members.map((m, i) => <li key={i}>{m.name}</li>)}</ul>
  </section>
);

export default Group;
