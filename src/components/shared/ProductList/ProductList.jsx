import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import ProductCard from './ProductCard/ProductCard';
import './ProductList.css';

import { fetchProducts } from '../../../store/actions/Product/ProductApi';

class ProductList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

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

const mapStateToProps = state => ({
  products: state.products.filteredItems,
  loading: state.products.loading,
  error: state.products.error
});

export default connect(mapStateToProps)(ProductList);
