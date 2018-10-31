import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProductsListItem from '../components/ProductsListItem';
import { getProducts } from '../actions/';

class ProductsList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getProducts());
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
  dispatch: PropTypes.func.isRequired,
};

ProductsList.defaultProps = {
  products: [],
};

// const mapStateToProps = state => ({ products: state.products.products });

// const mapStateToProps = (state) => {
//   const { products } = state;
//   // const length = products.length;
//   // console.log(length);
//   console.log(products.length);
//   const currentState = products[products.length - 1]; // 一番新しいstateを取り出す
//   console.log(currentState);
//   return { products: currentState.items }; // 描画するのに必要なのはとりあえずitemsだけなのでitemsだけ返す
// };

const mapStateToProps = (state) => {
  const length = state.products.length;
  const currentState = state.posts[length - 1]; // 一番新しいstateを取り出す
  return { posts: currentState.items }; // 描画するのに必要なのはとりあえずitemsだけなのでitemsだけ返す
};

export default connect(
  mapStateToProps,
  { getProducts },
)(ProductsList);
