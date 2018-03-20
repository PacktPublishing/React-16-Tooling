const initialState = {
  loading: false,
  book: null,
  controlsDisabled: false
};

const bookDetails = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_BOOK':
      return {
        ...state,
        loading: true
      };

    case 'FETCHED_BOOK':
      return {
        ...state,
        loading: false,
        book: action.book
      };

    case 'DELETING_BOOK':
      return {
        ...state,
        controlsDisabled: true
      };

    case 'DELETED_BOOK':
      return {
        ...state,
        controlsDisabled: false
      };

    default:
      return state;
  }
};

export default bookDetails;
