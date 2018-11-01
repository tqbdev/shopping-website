import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'

import './ProductCard.css';

class ProductCard extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isFavorite: false
    }

    this.onFavoriteClick = this.onFavoriteClick.bind(this);
    this.onClickProduct = this.onClickProduct.bind(this);
  }

  onFavoriteClick () {
    const prevState = this.state.isFavorite;
    this.setState({isFavorite: !prevState});
  }

  onClickProduct (id) {
    this.props.history.push(`/product/${id}`);
  }

  render () {
    const { product } = this.props;
    const isSale = product.salePrice < product.originalPrice;
    const originalPrice = isSale && <span>${product.originalPrice}</span>;

    return (
      <div className="product-item" onClick={() => this.onClickProduct(product.id)}>
        <div className="product">
          <div className="product_image">
            <img src={product.image} alt={product.image} />
          </div>

          <div onClick={this.onFavoriteClick} className={cx('favorite favorite_left', {
            'active': this.state.isFavorite
          })} />

          {isSale && (
            <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
              <span>Sale</span>
            </div>
          )}

          <div className="product_info">
            <h6 className="product_name">
              <span>{product.name}</span>
            </h6>
            <div className="product_price">
              ${product.salePrice}
              {originalPrice}
            </div>
          </div>
        </div>

        <div className="red_button add_to_cart_button">
          <a href="#">add to cart</a>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

ProductCard.defaultProps = {};

export default withRouter(ProductCard);
