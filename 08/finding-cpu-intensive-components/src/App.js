import React, { Component } from 'react';
import './App.css';
import Group from './Group';

class App extends Component {
  state = {
    groupCount: 1,
    memberCount: 200,
    groups: []
  };

  refreshGroups = (groups, members) => {
    this.setState(state => {
      const groupCount =
        groups === undefined ? state.groupCount : groups;
      const memberCount =
        members === undefined ? state.memberCount : members;
      return {
        ...state,
        groupCount,
        memberCount,
        groups: new Array(groupCount).fill(null).map((g, gi) => ({
          name: `Group ${gi + 1}`,
          members: new Array(memberCount)
            .fill(null)
            .map((m, mi) => ({ name: `Member ${mi + 1}` }))
        }))
      };
    });
  };

  onGroupCountChange = ({ target: { value } }) => {
    this.refreshGroups(+value);
  };

  onMemberCountChange = ({ target: { value } }) => {
    this.refreshGroups(undefined, +value);
  };

  onAddMemberClick = i => () => {
    this.setState(state => ({
      ...state,
      groups: state.groups.map(
        (v, gi) =>
          i === gi
            ? {
                ...v,
                members: v.members.concat({
                  name: `Member ${v.members.length + 1}`
                })
              }
            : v
      )
    }));
  };

  componentWillMount() {
    this.refreshGroups();
  }

  shouldComponentUpdate(props, state) {
    const totalMembers = ({ groups }) =>
      groups
        .map(({ members: { length } }) => length)
        .reduce((result, m) => result + m);

    return (
      this.state.groupCount !== state.groupCount ||
      this.state.memberCount !== state.memberCount ||
      totalMembers(this.state) !== totalMembers(state)
    );
  }

  render() {
    return (
      <section className="App">
        <div className="Field">
          <label htmlFor="groups">Groups</label>
          <input
            id="groups"
            type="range"
            value={this.state.groupCount}
            min="1"
            max="20"
            onChange={this.onGroupCountChange}
          />
        </div>
        <div className="Field">
          <label htmlFor="members">Members</label>
          <input
            id="members"
            type="range"
            value={this.state.memberCount}
            min="1"
            max="200"
            onChange={this.onMemberCountChange}
          />
        </div>
        {this.state.groups.map((g, i) => (
          <Group
            key={i}
            name={g.name}
            members={g.members}
            onAddMemberClick={this.onAddMemberClick(i)}
          />
        ))}
      </section>
    );
  }
}

export default App;
