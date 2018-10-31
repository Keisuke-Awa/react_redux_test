import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/App';
import reducer from './reducers/';
// import { getProducts } from './actions/index';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

// store.dispatch(getProducts());

ReactDOM.render(
  // providerはcontextを使っている
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.container'),
);
