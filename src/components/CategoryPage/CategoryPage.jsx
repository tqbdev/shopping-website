import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import queryString from 'query-string';
import memoize from 'memoize-one';
import { withRouter } from 'react-router-dom';

import SideBar from './Sidebar/Sidebar';
import { ShippingInformation, ProductList, Breadcrumb } from '../shared';
import SortingDropDown from './SortingDropDown/SortingDropDown';
import PerPageDropDown from './PerPageDropDown/PerPageDropDown';
import PageNavigationBar from './PageNavigationBar/PageNavigationBar';

import { fetchCategories } from '../../actions/CategoryActions';
import { fetchProducts } from '../../actions/ProductActions';

import './CategoryPage.css';

const perPageValues = [6, 12, 24];
const bouncePrice = {
  min: 0,
  max: 1000
}
const sortOptions = [
  {
    name: 'Default',
    pattern: null,
  },
  {
    name: 'Price',
    pattern: "salePrice DESC"
  },
  // {
  //   name: 'Price ASC',
  //   pattern: "salePrice ASC"
  // },
  {
    name: 'Name',
    pattern: "name ASC"
  }
]

class CategoryPage extends Component {
  constructor (props) {
    super(props);

    const params = queryString.parse(this.props.location.search);
    const { limit, page, minPrice, maxPrice, category, sort } = params;

    this.state = {
      limit: limit ? limit : perPageValues[0],
      selectedCategoryId: category ? category : 'all',
      currentPage: page ? page : 1,
      filterPrice: {
        min: minPrice ? minPrice : 0,
        max: maxPrice ? maxPrice : 600
      },
      selectedOption: sort ? sortOptions.find((value) => {
        if (value.name === sort) {
          return value;
        }
      }): sortOptions[0]
    }

    this.onPerPageValueChange = this.onPerPageValueChange.bind(this);
    this.onSelectedCategoryChanged = this.onSelectedCategoryChanged.bind(this);
    this.onPageChanged = this.onPageChanged.bind(this);
    this.onSortOptionChanged = this.onSortOptionChanged.bind(this);

    this.onStateChange = memoize(
      (state) => {
        this.generateQueryString();
        this.loadProduct();
      }
    );
  }

  componentDidMount() {
    this.props.dispatch(fetchCategories());
    this.loadProduct();
  }

  loadProduct() {
    const filter = {
      limit: +this.state.limit,
      skip: this.state.limit * (this.state.currentPage - 1),
      where: {
        salePrice: {
            gt: +this.state.filterPrice.min,
            lt: +this.state.filterPrice.max
        }
      }
    }

    if (this.state.selectedCategoryId !== '' && this.state.selectedCategoryId !== 'all') {
      filter.where.categoryId = this.state.selectedCategoryId;
    }
    if (this.state.selectedOption.pattern) {
      filter.order = [this.state.selectedOption.pattern];
    }
    this.props.dispatch(fetchProducts(filter));
  }

  generateQueryString() {
    let queryString = '?';

    queryString += `limit=${this.state.limit}`;
    queryString += `&page=${this.state.currentPage}`;
    queryString += `&minPrice=${this.state.filterPrice.min}`;
    queryString += `&maxPrice=${this.state.filterPrice.max}`;
    queryString += `&category=${this.state.selectedCategoryId}`;
    queryString += `&sort=${this.state.selectedOption.name}`;

    this.props.history.push({
      pathname: this.props.location.pathname,
      search: queryString
    });
  }

  onPerPageValueChange (value) {
    if (!value) return;

    this.setState((preState) => {
      preState.limit = value;
      return preState;
    });
  }

  onSelectedCategoryChanged (category) {
    if (!category || !category.id) return;

    this.setState((preState) => {
      preState.selectedCategoryId = category.id;
      return preState;
    });
  }

  onPageChanged (value) {
    if (!value) return;

    this.setState((preState) => {
      preState.currentPage = value;
      return preState;
    });
  }

  onSortOptionChanged (option) {
    this.setState((preState) => {
      preState.selectedOption = option;
      return preState;
    });
  }

  render () {
    this.onStateChange(this.state);
    return (
      <div>
        <div className="container product_section_container">
		      <div className="row">
			      <div className="col product_section clearfix">
              <Breadcrumb />
              <SideBar
                onSelectedCategoryChanged={this.onSelectedCategoryChanged}
                categories={this.props.categories}
                bounce={bouncePrice}
                filterPrice={this.state.filterPrice}/>

              <div className="main_content">
                <div className="products_iso">
                  <div className="row">
                    <div className="col">
                      <div className="product_sorting_container product_sorting_container_top">
                        <ul className="product_sorting">
                          <SortingDropDown
                          options={sortOptions}
                          selectedOption={this.state.selectedOption}
                          onSortOptionChanged={this.onSortOptionChanged}/>
                          <PerPageDropDown
                          selectedValue={this.state.limit}
                          values={perPageValues}
                          onPerPageValueChange={this.onPerPageValueChange}/>
                        </ul>
                        {this.props.pagination && 
                        <PageNavigationBar
                        total={Math.ceil(this.props.pagination.total / this.props.pagination.limit)}
                        current={this.state.currentPage}
                        onPageChanged={this.onPageChanged}/>}
								      </div>

                      {!this.props.loadingProducts && <ProductList
                        products={this.props.products} 
                      />}

                      <div className="product_sorting_container product_sorting_container_bottom clearfix">
									      <ul className="product_sorting">
                          <PerPageDropDown
                          selectedValue={this.state.limit}
                          values={perPageValues}
                          onPerPageValueChange={this.onPerPageValueChange}/>
                        </ul>
                        {this.props.pagination && 
                        <PageNavigationBar
                        total={Math.ceil(this.props.pagination.total / this.props.pagination.limit)}
                        current={this.state.currentPage}
                        onPageChanged={this.onPageChanged}/>}
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

const mapStateToProps = state => ({
  products: state.products.items,
  pagination: state.products.pagination,
  loadingProducts: state.products.loading,
  errorProducts: state.products.error,
  categories: state.categories.items,
  loadingCategories: state.categories.loading,
  errorCategories: state.categories.error
});

export default withRouter(connect(mapStateToProps)(CategoryPage));
