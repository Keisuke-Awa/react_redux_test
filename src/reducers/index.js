import { combineReducers } from 'redux';

const initialState = {
  product: {
    name: '',
    category: '',
  },
  products: {
    isFetching: false,
    productArray: [],
  },
};

const product = (state = initialState.product, action) => {
  switch (action.type) {
    case 'CHANGE_PRODUCT':
      return {
        ...state,
        name: action.name,
        category: action.category,
      };
    default:
      return state;
  }
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_REQUEST':
      return {
        ...state,
        products: {
          isFetching: true,
          productArray: [],
        },
      };
    case 'GET_PRODUCTS_SUCCESS':
      return {
        ...state,
        products: {
          isFetching: false,
          productArray: action.products,
          lastUpdated: action.receivedAt,
        },
      };
    case 'GET_PRODUCTS_FAILURE':
      return {
        ...state,
        products: {
          isFetching: false,
          error: action.error,
        },
      };
    case 'POST_PRODUCT_REQUEST':
      return state;
    case 'POST_PRODUCT_SUCCESS':
      return {
        ...state,
        product: {
          name: '',
          category: '',
        },
        products: {
          isFetching: false,
          productArray: action.products,
          lastUpdated: action.receivedAt,
        },
      };
    case 'POST_PRODUCT_FAILURE':
      return {
        ...state,
        productForm: {
          error: action.error,
        },
      };
    case 'DELETE_PRODUCT_REQUEST':
      return state;
    case 'DELETE_PRODUCT_SUCCESS':
      return {
        ...state,
        products: {
          isFetching: false,
          productArray: action.products,
          lastUpdated: action.receivedAt,
        },
      };
    case 'DELETE_PRODUCT_FAILURE':
      return {
        ...state,
        productForm: {
          error: action.error,
        },
      };
    default:
      return state;
  }
};

export default combineReducers({
  products,
  product,
});
