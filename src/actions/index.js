import axios from 'axios';

const devDomain = 'http://localhost:3000';

export const setProduct = (name, category) => dispatch => dispatch({ type: 'CHANGE_PRODUCT', name, category });

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
  axios.get(`${devDomain}/products`)
    .then((res) => {
      dispatch(getProductsSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getProductsFailure(err));
    });
};

export const POST_PRODUCT_REQUEST = 'POST_PRODUCT_REQUEST';
const postProductRequest = () => dispatch => dispatch({ type: POST_PRODUCT_REQUEST });

export const POST_PRODUCT_SUCCESS = 'POST_PRODUCT_SUCCESS';
const postProductSuccess = (newProduct, products) => dispatch => dispatch({
  type: POST_PRODUCT_SUCCESS,
  products: [...products, newProduct],
  receivedAt: Date.now(),
});

export const POST_PRODUCT_FAILURE = 'POST_PRODUCT_FAILURE';
const postProductFailure = error => dispatch => dispatch({
  type: POST_PRODUCT_FAILURE,
  error,
});

export const postProduct = (product, products) => (dispatch) => {
  dispatch(postProductRequest());
  console.log(product);
  axios.post(`${devDomain}/products`, { product })
    .then((res) => {
      const newProduct = res.data;
      dispatch(postProductSuccess(newProduct, products));
    })
    .catch((err) => {
      dispatch(postProductFailure(err));
    });
};

export const DELETE_PRODUCT_REQUEST = 'DELETE_PRODUCT_REQUEST';
const deleteProductRequest = () => dispatch => dispatch({ type: DELETE_PRODUCT_REQUEST });

export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
const deleteProductSuccess = products => dispatch => dispatch({
  type: DELETE_PRODUCT_SUCCESS,
  products,
  receivedAt: Date.now(),
});

export const DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE';
const deleteProductFailure = error => dispatch => dispatch({
  type: DELETE_PRODUCT_FAILURE,
  error,
});

export const deleteProduct = product => (dispatch) => {
  dispatch(deleteProductRequest());
  axios.delete(`${devDomain}/products/${product.id}`)
    .then((res) => {
      dispatch(deleteProductSuccess(res.data));
    })
    .catch((err) => {
      dispatch(deleteProductFailure(err));
    });
};
