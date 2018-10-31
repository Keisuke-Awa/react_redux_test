import React from 'react';
import PropTypes from 'prop-types';

const ProductsListItem = ({ productId, productName }) => (
  <li key={productId}>
    { productName }
  </li>
);

ProductsListItem.propTypes = {
  productId: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
};

export default ProductsListItem;
