const initialState = {
  title: '',
  author: '',
  imgURL: '',
  controlsDisabled: false
};

const newBook = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NEW_BOOK_TITLE':
      return {
        ...state,
        title: action.title
      };
    case 'SET_NEW_BOOK_AUTHOR':
      return {
        ...state,
        author: action.author
      };
    case 'SET_NEW_BOOK_IMAGE_URL':
      return {
        ...state,
        imgURL: action.imgURL
      };
    case 'CREATING_BOOK':
      return {
        ...state,
        controlsDisabled: true
      };
    case 'CREATED_BOOK':
      return initialState;
    default:
      return state;
  }
};

export default newBook;
