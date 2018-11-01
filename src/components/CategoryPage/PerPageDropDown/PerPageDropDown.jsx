import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PerPageDropDown extends Component {
  constructor (props) {
    super(props);

    this.onClickHandle = this.onClickHandle.bind(this);
  }

  onClickHandle(value) {
    if (!value) return;

    const { onPerPageValueChange } = this.props;
    if (onPerPageValueChange) {
      onPerPageValueChange(value);
    }
  }

  render () {
    return (
      <li>
        <span>Show</span>
        <span>{this.props.selectedValue}</span>
        <i className="fa fa-angle-down"></i>
        <ul>
          {this.props.values.map(value => (
            <li
              key={value}
              onClick={() => this.onClickHandle(value)}
            ><span>{value}</span></li>
          ))}
        </ul>
      </li>
    );
  }
}
