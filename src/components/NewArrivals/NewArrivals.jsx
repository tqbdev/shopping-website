import React, { Component } from 'react';
import _ from 'lodash';

import ProductList from './ProductList/ProductList';
import CategoryOptions from './CategoryOptions/CategoryOptions';

import products from '../../services/data/products';
import categories from '../../services/data/categories';

import './NewArrivals.css';

export default class NewArrivals extends Component {
  constructor (props) {
    super(props);

    this.categories = [
      {
        id: 'all',
        name: 'all'
      },
      ...categories
    ]

    this.state = {
      filteredProducts: products,
    };

    this.onSelectedCategoryChanged = this.onSelectedCategoryChanged.bind(this);
  }

  onSelectedCategoryChanged(category) {
    if (!category || !category.id) return;

    const filteredProducts = category.id === 'all' 
      ? products : _.filter(products, { categoryId: category.id });
    this.setState({ filteredProducts });
  }

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

          <CategoryOptions
            categories={this.categories}
            defaultCategoryId={this.categories[0].id}
            onSelectedCategoryChanged={this.onSelectedCategoryChanged}
          />

          <ProductList products={this.state.filteredProducts} />

        </div>
      </div>
    );
  }
}
