import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemText,
  Avatar,
  IconButton,
} from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import DeleteIcon from '@material-ui/icons/Delete';

const ProductsListItem = ({ product, deleteProduct }) => (
  <ListItem>
    <Avatar>
      <ImageIcon />
    </Avatar>
    <ListItemText primary={product.name} secondary={`category: ${product.category}`} />
    <IconButton
      aria-label="Delete"
      onClick={() => {
        deleteProduct(product);
      }}
    >
      <DeleteIcon />
    </IconButton>
  </ListItem>
);

ProductsListItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  deleteProduct: PropTypes.func.isRequired,
};

export default ProductsListItem;
