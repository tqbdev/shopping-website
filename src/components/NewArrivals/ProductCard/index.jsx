import React, { Component } from "react";

import './ProductCard.css';

export default class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const productImage = `assets/${product.image}`;
    const additional = product.salePrice === product.originalPrice ? '' : (<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>Sale</span></div>);
    const originalPrice = product.salePrice === product.originalPrice ? '' : <span>${product.originalPrice}</span>;
    return (
      <div className="product-item">
        <div className="product">
          <div className="product_image">
            <img src={productImage} alt={product.image} />
          </div>
          <div className="favorite favorite_left" />
          {additional}
          <div className="product_info">
            <h6 className="product_name">
              <a href="#">{product.name}</a>
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
