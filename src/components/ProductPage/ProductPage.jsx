import React, { Component } from 'react';

import { Header, Footer, ShippingInformation, Breadcrumb } from '../shared';
import Thumbnails from './Thumbnails/Thumbnails';
import ProductDetails from './Details/ProductDetails';
import Tabs from './Tabs/Tabs';

import './ProductPage.css';

export default class ProductPage extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const images = [
      {
        id: 1,
        thumb: 'single_1_thumb.jpg',
        pic: 'single_1.jpg',
      },
      {
        id: 2,
        thumb: 'single_2_thumb.jpg',
        pic: 'single_2.jpg',
      },
      {
        id: 3,
        thumb: 'single_3_thumb.jpg',
        pic: 'single_3.jpg',
      }
    ]
    return (
      <div>
        <Header></Header>
        <div className="container single_product_container">
		      <div className="row">
			      <div className="col">
              <Breadcrumb></Breadcrumb>
            </div>
          </div>

          <div className="row">
            <Thumbnails images={images}></Thumbnails>
            <ProductDetails></ProductDetails>
          </div>
        </div>
        <Tabs></Tabs>
        <ShippingInformation></ShippingInformation>
        <Footer></Footer>
      </div>
    );
  }
}
