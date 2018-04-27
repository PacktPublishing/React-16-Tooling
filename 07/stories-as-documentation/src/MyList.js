import React from 'react';
import PropTypes from 'prop-types';

const Empty = ({ items, children }) =>
  items.length === 0 ? children : null;

const MyList = ({ items }) => (
  <section>
    <Empty items={items}>No items found</Empty>
    <ul>{items.map((v, i) => <li key={i}>{v}</li>)}</ul>
  </section>
);

MyList.propTypes = {
  items: PropTypes.array
};

MyList.defaultProps = {
  items: []
};

export default MyList;
