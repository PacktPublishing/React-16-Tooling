import React, { Component } from 'react';
import MyItem from './MyItem';

class MyList extends Component {
  timer = null;
  state = { items: [] };

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.items.length === 10) {
        clearInterval(this.timer);
        return;
      }

      this.setState(state => ({
        ...state,
        items: [
          ...state.items,
          {
            label: `Item ${state.items.length + 1}`,
            strikethrough: false
          }
        ]
      }));
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

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
