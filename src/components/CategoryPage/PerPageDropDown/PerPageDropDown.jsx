import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PerPageDropDown extends Component {
  constructor (props) {
    super(props);
  }
  
  render () {
    return (
      <li>
        <span>Show</span>
        <span>6</span>
        <i className="fa fa-angle-down"></i>
        <ul>
          <li><span>6</span></li>
          <li><span>12</span></li>
          <li><span>24</span></li>
        </ul>
      </li>
    );
  }
}
