import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List, Grid } from '@material-ui/core';

import ProductsListItem from '../components/ProductsListItem';
import ProductForm from './ProductForm';
import { getProducts, deleteProduct } from '../actions/';

class ProductsContainer extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const {
      products,
    } = this.props;

    return (
      <Grid container justify="center">
        <Grid item xs={3}>
          <ProductForm products={products} />
        </Grid>
        <Grid item xs={6}>
          <List>
            {products.map(product => (
              <ProductsListItem key={product.id} product={product} deleteProduct={this.props.deleteProduct} />
            ))}
          </List>
        </Grid>
      </Grid>
    );
  }
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.any),
  getProducts: PropTypes.func.isRequired,
};

ProductsContainer.defaultProps = {
  products: [],
};

// const mapStateToProps = (state) => {
//   return { products: state.products.products.productArray }; // 描画するのに必要なのはとりあえずitemsだけなのでitemsだけ返す
// };

// const mapStateToProps = state => ({
//   products: state.products.productArray,
// });

export default connect(
  state => ({
    products: state.products.products.productArray,
  }),
  { getProducts, deleteProduct },
)(ProductsContainer);
