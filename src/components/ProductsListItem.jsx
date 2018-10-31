import React from 'react';
import PropTypes from 'prop-types';

const ProductsListItem = ({ product }) => (
  <li>
    { product.name }
  </li>
);

ProductsListItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductsListItem;
