import { combineReducers } from 'redux';

const initialState = {
  isFetching: false,
  products: [],
};

const products = (state = [initialState], action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_REQUEST':
      return [
        ...state,
        {
          isFetching: true,
          products: [],
        },
      ];
    case 'GET_PRODUCTS_SUCCESS':
      return [
        ...state,
        {
          isFetching: false,
          products: action.products,
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
