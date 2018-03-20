import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchBooks } from '../api';
import Book from './Book';
import Loading from './Loading';
import './Home.css';

class Home extends Component {
  componentWillMount() {
    this.props.fetchBooks();
  }

  render() {
    const {
      loading,
      books,
      filterValue,
      onFilterChange
    } = this.props;

    return (
      <Loading loading={loading}>
        <section>
          <input
            placeholder="Filter"
            onChange={onFilterChange}
            value={filterValue}
          />
        </section>
        <section className="Books">
          {books
            .filter(
              book =>
                filterValue.length === 0 ||
                new RegExp(filterValue, 'gi').test(book.title)
            )
            .map(book => (
              <Book
                key={book.title}
                title={book.title}
                author={book.author}
                imgURL={book.imgURL}
              />
            ))}
        </section>
      </Loading>
    );
  }
}

const mapState = state => state.home;
const mapDispatch = dispatch => ({
  fetchBooks() {
    dispatch({ type: 'FETCHING_BOOKS' });

    fetchBooks().then(books => {
      dispatch({
        type: 'FETCHED_BOOKS',
        books
      });
    });
  },

  onFilterChange({ target: { value } }) {
    dispatch({ type: 'SET_FILTER_VALUE', filterValue: value });
  }
});

export default connect(mapState, mapDispatch)(Home);
