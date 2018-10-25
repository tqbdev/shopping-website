import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard/ProductCard';
import './ProductList.css';

export default class ProductList extends Component {
  render() {
    return (
      <div className="row">
        <div className="col products-list">
          {this.props.products.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    )
  }
}

ProductCard.propTypes = {
  products: PropTypes.array,
};

ProductCard.defaultProps = {
  products: [],
};
