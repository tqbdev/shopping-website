import React, { Component } from 'react';
import _ from 'lodash';

import { ProductList } from '../../shared';
import CategoryOptions from './CategoryOptions/CategoryOptions';

import './NewArrivals.css';

export default class NewArrivals extends Component {
  render() {
    return (
      <div className="new_arrivals">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="section_title new_arrivals_title">
                <h2>New Arrivals</h2>
              </div>
            </div>
          </div>
          <CategoryOptions></CategoryOptions>
          <ProductList></ProductList>
        </div>
      </div>
    );
  }
}
