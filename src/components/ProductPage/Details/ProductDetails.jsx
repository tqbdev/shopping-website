import React, { Component } from 'react';
import cx from 'classnames';

import Thumbnails from './Thumbnails/Thumbnails';
import './ProductDetails.css';

export default class ProductDetails extends Component {
  constructor (props) {
		super(props);
		
		this.state = {
			isFavorite: false,
			quantity: 1
		}

		this.changeFavorite = this.changeFavorite.bind(this);
		this.changeQuanlity = this.changeQuanlity.bind(this);
		this.onClickAddProduct = this.onClickAddProduct.bind(this);
	}
	
	changeQuanlity(number) {
		let quantity = this.state.quantity + number;

		if (quantity < 1) {
			quantity = 1;
		}

		this.setState({
			isFavorite: this.state.isFavorite,
			quantity
		});
	}

	changeFavorite() {
		this.setState({
			isFavorite: !this.state.isFavorite,
			quantity: this.state.quantity
		});
	}

	onClickAddProduct (product) {
		if (!product) return;

		const { onAddProduct } = this.props;
		if (onAddProduct) {
			onAddProduct(product, this.state.quantity);
		}
	}

  render () {
		const staticClass = "product_favorite d-flex flex-column align-items-center justify-content-center";
		const { product } = this.props;

    return(
			<div className="row">
				<Thumbnails images={product.images}></Thumbnails>
				<div className="col-lg-5">
					<div className="product_details">
						<div className="product_details_title">
							<h2>{product.name}</h2>
							<p>{product.shortDescription}</p>
						</div>
						<div className="free_delivery d-flex flex-row align-items-center justify-content-center">
							<span className="ti-truck"></span><span>free delivery</span>
						</div>
						{product.salePrice !== product.originalPrice && <div className="original_price">$ {product.originalPrice}</div>}
						<div className="product_price">$ {product.salePrice}</div>
						<ul className="star_rating">
							<li><i className="fa fa-star" aria-hidden="true"></i></li>
							<li><i className="fa fa-star" aria-hidden="true"></i></li>
							<li><i className="fa fa-star" aria-hidden="true"></i></li>
							<li><i className="fa fa-star" aria-hidden="true"></i></li>
							<li><i className="fa fa-star-o" aria-hidden="true"></i></li>
						</ul>
						<div className="product_color">
							<span>Select Color:</span>
							<ul>
								<li style={{background: "#e54e5d"}}></li>
								<li style={{background: "#252525"}}></li>
								<li style={{background: "#60b3f3"}}></li>
							</ul>
						</div>
						<div className="quantity d-flex flex-column flex-sm-row align-items-sm-center">
							<span>Quantity:</span>
							<div className="quantity_selector">
								<span className="minus" onClick={() => this.changeQuanlity(-1)}><i className="fa fa-minus" aria-hidden="true"></i></span>
								<span id="quantity_value">{this.state.quantity}</span>
								<span className="plus" onClick={() => this.changeQuanlity(1)}><i className="fa fa-plus" aria-hidden="true"></i></span>
							</div>
							<div className="red_button add_to_cart_button"><span style={{cursor: 'pointer'}} onClick={() => this.onClickAddProduct(product)}>add to cart</span></div>
							<div className={cx(staticClass, {
								'active': this.state.isFavorite
							})}
							onClick={this.changeFavorite}></div>
						</div>
					</div>
				</div>
			</div>
    )
  }
}
