import React from 'react';
import { Link } from 'react-router-dom';

import './Book.css';

const Book = ({ title, author, imgURL }) => (
  <section className="Book">
    <header>
      <Link to={`/book/${title}`}>
        <h3>{title}</h3>
      </Link>
    </header>
    <img src={imgURL} alt="" />
    <strong>{author}</strong>
  </section>
);

export default Book;
