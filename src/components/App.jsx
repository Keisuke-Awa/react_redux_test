import React from 'react';
import Button from '@material-ui/core/Button';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch,
// } from 'react-router-dom';

import Products from '../containers/ProductsList';

const App = () => (
  <div>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
    <Products />
  </div>
);

export default App;
