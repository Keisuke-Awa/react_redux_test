import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TextField, Button, FormGroup } from '@material-ui/core';

import { setProduct, postProduct } from '../actions/';

const ProductForm = (props) => {
  const { product, products } = props;
  return (
    <FormGroup>
      <form
        noValidate
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          props.postProduct(product, products);
        }}
      >
        <h2>Form</h2>
        <TextField
          label="Name"
          margin="normal"
          name="product[name]"
          value={product.name}
          onChange={(e) => {
            e.preventDefault();
            props.setProduct(e.target.value, product.category);
          }}
        />
        <TextField
          label="Category"
          margin="normal"
          name="product[category]"
          value={product.category}
          onChange={(e) => {
            e.preventDefault();
            props.setProduct(product.name, e.target.value);
          }}
        />
        <Button
          type="submit"
          variant="outlined"
        >
          Add Product
        </Button>
      </form>
    </FormGroup>
  );
};

ProductForm.propTypes = {
  products: PropTypes.arrayOf(PropTypes.any).isRequired,
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  setProduct: PropTypes.func.isRequired,
  postProduct: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    product: {
      name: state.product.name,
      category: state.product.category,
    },
  }),
  { setProduct, postProduct },
)(ProductForm);
