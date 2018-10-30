import { combineReducers } from 'redux';

const products = (state = ['test', 'test'], action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return action.products;
    default:
      return state;
  }
};

export default combineReducers({
  products,
});
