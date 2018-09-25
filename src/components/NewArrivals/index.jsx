import React, { Component } from "react";

import ProductCard from "./ProductCard";
import GetData from '../../services/GetData';
import Filter from '../../services/Filter';

import "./NewArrivals.css";

export default class NewArrivals extends Component {
  state = {
    products: [],
    filters: [],
    categories: [],
    filter: "all"
  };

  async componentDidMount() {
    try {
      var resProducts = await GetData.getProducts();
      var jsonProducts = await resProducts.json();
      var resCategories = await GetData.getCategories();
      var jsonCategories = await resCategories.json();
      this.setState({
        products: jsonProducts.body,
        filters: jsonProducts.body,
        categories: jsonCategories.body
      });
    } catch (error) {
      console.log("Fetch API | Error:", error);
    }
  }

  setFilter(filter) {
    if (filter === "all") {
      this.setState({
        filters: this.state.products,
        filter
      });
    } else {
      const filteredProducts = Filter.filterProductByCategory(this.state.products, filter);
      this.setState({
        filter,
        filters: filteredProducts
      });
    }
  }

  isActive(value) {
    return "grid_sorting_button button d-flex flex-column justify-content-center align-items-center " + ((value===this.state.filter) ? "active is-checked" : "");
  }

  render() {
    var arr = [];
    this.state.filters.map(product => {
      arr.push(
        <ProductCard
          key={product.id}
          product={product}
        />
      );
    });

    var arrBtnFilter = [];
    arrBtnFilter.push(
      <li className={this.isActive("all")} onClick={this.setFilter.bind(this, "all")}>
        all
      </li>
    );
    this.state.categories.map(category => {
      if (category.name) {
        arrBtnFilter.push(
          <li className={this.isActive(category)} onClick={this.setFilter.bind(this, category)}>
            {category.name}
          </li>
        );
      }
    });

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
          <div className="row align-items-center">
            <div className="col text-center">
              <div className="new_arrivals_sorting">
                <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
                  {/* <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center active is-checked">
                    all
                  </li>
                  <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center">
                    women's
                  </li>
                  <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center">
                    accessories
                  </li>
                  <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center">
                    men's
                  </li> */}
                  {arrBtnFilter}
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="product-grid">{arr}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
