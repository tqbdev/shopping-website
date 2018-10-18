import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';

import 'react-input-range/lib/css/index.css';
import './FilterByPrice';

export default class FilterByPrice extends Component {
  constructor (props) {
    super(props);

    this.state = {
      value: {
        min: 2,
        max: 20
      }
    }
  }
  
  render () {
    return (
      <div className="sidebar_section">
        <div className="sidebar_title">
          <h5>Filter by Price</h5>
        </div>
        <p>
        <InputRange
          maxValue={20}
          minValue={0}
          value={this.state.value}
          onChange={value => this.setState({ value })} />
          {/* <input type="text" id="amount" readOnly /> */}
        </p>
        <div id="slider-range"></div>
        <div className="filter_button"><span>filter</span></div>
      </div>
    );
  }
}