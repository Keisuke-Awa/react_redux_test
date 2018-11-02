import { combineReducers } from 'redux';

const initialState = {
  products: {
    isFetching: false,
    productArray: [],
  },
};

const products = (state = initialState.products, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_REQUEST':
      return {
        ...state,
        isFetching: true,
        productArray: [],
      };
    case 'GET_PRODUCTS_SUCCESS':
      return {
        ...state,
        isFetching: false,
        productArray: action.products,
        lastUpdated: action.receivedAt,
      };
    case 'GET_PRODUCTS_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default combineReducers({
  products,
});
