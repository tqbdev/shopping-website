import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './FilterByPrice';

export default class FilterByPrice extends Component {
  constructor (props) {
    super(props);
  }
  
  render () {
    return (
      <div className="sidebar_section">
        <div className="sidebar_title">
          <h5>Filter by Price</h5>
        </div>
        <p>
          {/* <input type="text" id="amount" readOnly /> */}
        </p>
        <div id="slider-range"></div>
        <div className="filter_button"><span>filter</span></div>
      </div>
    );
  }
}
