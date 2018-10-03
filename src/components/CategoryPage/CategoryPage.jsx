import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SideBar from './Sidebar/Sidebar';
import { Header, Footer, ShippingInformation, ProductList, Breadcrumb } from '../shared';
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
        <Header />
        <div class="container product_section_container">
		      <div class="row">
			      <div class="col product_section clearfix">
              <Breadcrumb />
              <SideBar />

              <div class="main_content">
                <div class="products_iso">
                  <div class="row">
                    <div class="col">
                      <div class="product_sorting_container product_sorting_container_top">
                        <ul class="product_sorting">
                          <SortingDropDown />
                          <PerPageDropDown />
                        </ul>
                        <PageNavigationBar />
								      </div>

                      {this.state.filteredProducts && <ProductList
                        products={this.state.filteredProducts} 
                      />}

                      <div class="product_sorting_container product_sorting_container_bottom clearfix">
									      <ul class="product_sorting">
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
        <Footer />
      </div>
    );
  }
}
