import React, { Component } from 'react';
import _ from 'lodash';

import { ProductList } from '../../shared';
import CategoryOptions from './CategoryOptions/CategoryOptions';

// import products from '../../services/data/products';
// import categories from '../../services/data/categories';

import GetData from '../../../services/GetData';

import './NewArrivals.css';

export default class NewArrivals extends Component {
  constructor (props) {
    super(props);

    this.categories = null;
    this.products = null;

    this.state = {
      filteredProducts: null,
    };

    this.onSelectedCategoryChanged = this.onSelectedCategoryChanged.bind(this);
  }

  async componentDidMount() {
    try {
      const resProducts = await GetData.getProducts();
      const products = (await resProducts.json()).body;
      const resCategories = await GetData.getCategories();
      const categories = (await resCategories.json()).body;

      this.categories = [
        {
          id: 'all',
          name: 'all'
        },
        ...categories
      ]
      
      this.products = products;

      this.setState({
        filteredProducts: products
      });

    } catch (error) {
      console.log("Fetch API | Error:", error);
    }
  }

  onSelectedCategoryChanged(category) {
    if (!category || !category.id) return;

    const filteredProducts = category.id === 'all' 
      ? this.products : _.filter(this.products, { categoryId: category.id });
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

          {this.categories && <CategoryOptions
            categories={this.categories}
            defaultCategoryId={this.categories[0].id}
            onSelectedCategoryChanged={this.onSelectedCategoryChanged}
          />}

          {this.state.filteredProducts && <ProductList
            products={this.state.filteredProducts} 
          />}

        </div>
      </div>
    );
  }
}
