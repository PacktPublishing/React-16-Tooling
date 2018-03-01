import React, { Component } from 'react';
import MyItem from './MyItem';

class MyList extends Component {
  timer = null;
  state = {
    items: new Array(10).fill(null).map((v, i) => ({
      label: `Item ${i + 1}`,
      strikethrough: false
    }))
  };

  onItemClick = index => () => {
    this.setState(state => ({
      ...state,
      items: state.items.map(
        (v, i) =>
          index === i
            ? {
                ...v,
                strikethrough: !v.strikethrough
              }
            : v
      )
    }));
  };

  render() {
    return (
      <ul>
        {this.state.items.map((v, i) => (
          <MyItem
            key={i}
            label={v.label}
            strikethrough={v.strikethrough}
            onClick={this.onItemClick(i)}
          />
        ))}
      </ul>
    );
  }
}

export default MyList;
