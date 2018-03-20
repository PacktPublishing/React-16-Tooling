import React, { Component } from 'react';
import { connect } from 'react-redux';

import Book from './Book';
import Loading from './Loading';
import { fetchBook, deleteBook } from '../api';

class BookDetails extends Component {
  componentWillMount() {
    const {
      match: { params: { title } },
      fetchingBook,
      fetchedBook
    } = this.props;

    fetchingBook();
    fetchBook(title).then(book => {
      fetchedBook(book);
    });
  }

  onDeleteClick = () => {
    const {
      book: { title },
      deletingBook,
      deletedBook,
      history
    } = this.props;

    deletingBook();
    deleteBook(title).then(() => {
      deletedBook();
      history.push('/');
    });
  };

  render() {
    const { loading, book, controlsDisabled } = this.props;

    return (
      <Loading loading={loading}>
        <Book {...book} />
        <button
          disabled={controlsDisabled}
          onClick={this.onDeleteClick}
        >
          Delete
        </button>
      </Loading>
    );
  }
}

const mapState = state => state.bookDetails;
const mapDispatch = dispatch => ({
  fetchingBook() {
    dispatch({ type: 'FETCHING_BOOK' });
  },

  fetchedBook(book) {
    dispatch({ type: 'FETCHED_BOOK', book });
  },

  deletingBook() {
    dispatch({ type: 'DELETING_BOOK' });
  },

  deletedBook() {
    dispatch({ type: 'DELETED_BOOK' });
  }
});

export default connect(mapState, mapDispatch)(BookDetails);
