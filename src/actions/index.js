import axios from 'axios';

export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';
const getProductsRequest = () => dispatch => dispatch({ type: GET_PRODUCTS_REQUEST });

export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
const getProductsSuccess = json => dispatch => dispatch({
  type: GET_PRODUCTS_SUCCESS,
  products: json,
  receivedAt: Date.now(),
});

export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';
const getProductsFailure = error => dispatch => dispatch({
  type: GET_PRODUCTS_FAILURE,
  error,
});

export const getProducts = () => (dispatch) => {
  dispatch(getProductsRequest());
  axios.get('http://localhost:3000/products')
    .then((res) => {
      dispatch(getProductsSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getProductsFailure(err));
    });
};
