import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SortingDropDown.css';

export default class SortingDropDown extends Component {
  constructor (props) {
    super(props);
  }
  
  render () {
    return (
      <li>
        <span>Default Sorting</span>
        <i className="fa fa-angle-down"></i>
        <ul>
          <li><span>Price</span></li>
          <li><span>Default Sorting</span></li>
          <li><span>Product Name</span></li>
        </ul>
      </li>
    );
  }
}
