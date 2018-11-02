import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProductsListItem from '../components/ProductsListItem';
import { getProducts } from '../actions/';

class ProductsList extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const {
      products,
    } = this.props;

    return (
      <div>
        <ul>
          {products.map(product => (
            <ProductsListItem key={product.id} product={product} />
          ))}
        </ul>
      </div>
    );
  }
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.any),
  getProducts: PropTypes.func.isRequired,
};

ProductsList.defaultProps = {
  products: [],
};

const mapStateToProps = (state) => {
  const { products } = state;
  const currentState = state.products[products.length - 1]; // 一番新しいstateを取り出す
  return { products: currentState.items }; // 描画するのに必要なのはとりあえずitemsだけなのでitemsだけ返す
};

export default connect(
  mapStateToProps,
  { getProducts },
)(ProductsList);
