import React, { Component } from 'react';

import CategoryList from './CategoryList/CategoryList';
import FilterByPrice from './FilterByPrice/FilterByPrice';

import './Sidebar.css';

export default class SideBar extends Component {
  render () {
    return (
      <div className="sidebar">
        <CategoryList />
        <FilterByPrice />
      </div>
    );
  }
}
