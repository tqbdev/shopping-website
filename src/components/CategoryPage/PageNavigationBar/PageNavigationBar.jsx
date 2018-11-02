import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './PageNavigationBar.css';

export default class PageNavigationBar extends Component {
  constructor (props) {
    super(props);

    this.onClickPage = this.onClickPage.bind(this);
  }

  onClickPage(value) {
    if (!value) return;

    const { onPageChanged } = this.props;
    if (onPageChanged) {
      onPageChanged(value);
    }
  }

  renderPageSelection()  {
    let selections = [];
    for (let i = 1; i <= this.props.total; i++) {
      selections.push(<li key={i} onClick={() => this.onClickPage(i)}><a href="#">{i}</a></li>);
    }
    return selections;
  }

  render () {
    return (
      <div className="pages d-flex flex-row align-items-center">
        <div className="page_current">
          <span>{this.props.current}</span>
          <ul className="page_selection">
            {
            this.renderPageSelection()
            }
          </ul>
        </div>
        <div className="page_total"><span>of</span> {this.props.total}</div>
        {+this.props.current !== +this.props.total && <div id="next_page" className="page_next"><a href="#" onClick={() => this.onClickPage(+this.props.current + 1)}><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></div>}
      </div>
    );
  }
}
