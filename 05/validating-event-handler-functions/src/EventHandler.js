// @flow
import * as React from 'react';
import { Component } from 'react';

class EventHandler extends Component<{}> {
  clickHandler = (e: SyntheticEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    console.log('clicked', e.target);
  }

  render() {
    return (
      <section>
        <a href="#page1" onClick={this.clickHandler}>
          First Link
        </a>
      </section>
    );
  }
}

export default EventHandler;
