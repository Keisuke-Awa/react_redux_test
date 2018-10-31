import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProductsListItem from '../components/ProductsListItem';
import { getProducts } from '../actions/index';


class ProductsList extends Component {
  componentDidMount() {
    this.props.dispatch(getProducts());
    console.log(this.props.products);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.products.map(product => (
            <ProductsListItem productId={product.id} productName={product.name} />
          ))}
        </ul>
      </div>
    );
  }
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.any),
  dispatch: PropTypes.func.isRequired,
};

ProductsList.defaultProps = {
  products: [],
};

// const mapStateToProps = state => ({ products: state.products.products });

const mapStateToProps = (state) => {
  const length = state.products.length;
  const currentState = state.products[length - 1]; // 一番新しいstateを取り出す
  console.log(currentState.products);
  return { products: currentState.products }; // 描画するのに必要なのはとりあえずitemsだけなのでitemsだけ返す
};

export default connect(
  mapStateToProps,
)(ProductsList);
