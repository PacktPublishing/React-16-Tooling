const initialState = {
  loading: false,
  books: [],
  filterValue: ''
};

const home = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_BOOKS':
      return {
        ...state,
        loading: true
      };
    case 'FETCHED_BOOKS':
      return {
        ...state,
        loading: false,
        books: action.books
      };

    case 'SET_FILTER_VALUE':
      return {
        ...state,
        filterValue: action.filterValue
      };

    default:
      return state;
  }
};

export default home;
