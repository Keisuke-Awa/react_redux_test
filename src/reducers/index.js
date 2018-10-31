import { combineReducers } from 'redux';

const initialState = {
  isFetching: false,
  items: [],
};

const products = (state = [initialState], action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_REQUEST':
      return [
        ...state,
        {
          isFetching: true,
          items: [],
        },
      ];
    case 'GET_PRODUCTS_SUCCESS':
      return [
        ...state,
        {
          isFetching: false,
          items: action.products,
          lastUpdated: action.receivedAt,
        },
      ];
    case 'GET_PRODUCTS_FAILURE':
      return [
        ...state,
        {
          isFetching: false,
          error: action.error,
        },
      ];
    default:
      return state;
  }
};

export default combineReducers({
  products,
});
