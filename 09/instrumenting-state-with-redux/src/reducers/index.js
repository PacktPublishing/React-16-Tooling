import { combineReducers } from 'redux';
import app from './app';
import home from './home';
import newBook from './newBook';
import bookDetails from './bookDetails';

const reducers = combineReducers({
  app,
  home,
  newBook,
  bookDetails
});

export default reducers;
