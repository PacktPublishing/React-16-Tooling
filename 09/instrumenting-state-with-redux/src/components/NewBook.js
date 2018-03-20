import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createBook } from '../api';
import './NewBook.css';

class NewBook extends Component {
  render() {
    const {
      title,
      author,
      imgURL,
      controlsDisabled,
      onTitleChange,
      onAuthorChange,
      onImageURLChange,
      onCreateBook
    } = this.props;

    return (
      <section className="NewBook">
        <label>
          Title:
          <input
            autoFocus
            onChange={onTitleChange}
            value={title}
            disabled={controlsDisabled}
          />
        </label>
        <label>
          Author:
          <input
            onChange={onAuthorChange}
            value={author}
            disabled={controlsDisabled}
          />
        </label>
        <label>
          Image URL:
          <input
            onChange={onImageURLChange}
            value={imgURL}
            disabled={controlsDisabled}
          />
        </label>
        <button
          onClick={() => {
            onCreateBook(title, author, imgURL);
          }}
          disabled={controlsDisabled}
        >
          Create
        </button>
      </section>
    );
  }
}

const mapState = state => state.newBook;
const mapDispatch = dispatch => ({
  onTitleChange({ target: { value } }) {
    dispatch({ type: 'SET_NEW_BOOK_TITLE', title: value });
  },

  onAuthorChange({ target: { value } }) {
    dispatch({ type: 'SET_NEW_BOOK_AUTHOR', author: value });
  },

  onImageURLChange({ target: { value } }) {
    dispatch({ type: 'SET_NEW_BOOK_IMAGE_URL', imgURL: value });
  },

  onCreateBook(title, author, imgURL) {
    dispatch({ type: 'CREATING_BOOK' });
    createBook(title, author, imgURL).then(() => {
      dispatch({ type: 'CREATED_BOOK' });
    });
  }
});

export default connect(mapState, mapDispatch)(NewBook);
