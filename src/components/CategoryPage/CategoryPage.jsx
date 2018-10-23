import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SideBar from './Sidebar/Sidebar';
import { ShippingInformation, ProductList, Breadcrumb } from '../shared';
import SortingDropDown from './SortingDropDown/SortingDropDown';
import PerPageDropDown from './PerPageDropDown/PerPageDropDown';
import PageNavigationBar from './PageNavigationBar/PageNavigationBar';

import GetData from '../../services/GetData';

import './CategoryPage.css';

export default class CategoryPage extends Component {
  constructor (props) {
    super(props);

    this.categories = null;
    this.products = null;

    this.state = {
      filteredProducts: null,
    };
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
  
  render () {
    return (
      <div>
        <div className="container product_section_container">
		      <div className="row">
			      <div className="col product_section clearfix">
              <Breadcrumb />
              <SideBar />

              <div className="main_content">
                <div className="products_iso">
                  <div className="row">
                    <div className="col">
                      <div className="product_sorting_container product_sorting_container_top">
                        <ul className="product_sorting">
                          <SortingDropDown />
                          <PerPageDropDown />
                        </ul>
                        <PageNavigationBar />
								      </div>

                      {this.state.filteredProducts && <ProductList
                        products={this.state.filteredProducts} 
                      />}

                      <div className="product_sorting_container product_sorting_container_bottom clearfix">
									      <ul className="product_sorting">
                          <PerPageDropDown />
                        </ul>
                        <PageNavigationBar />
								      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ShippingInformation />
      </div>
    );
  }
}
