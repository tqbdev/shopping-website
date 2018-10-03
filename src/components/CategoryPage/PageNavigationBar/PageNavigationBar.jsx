import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './PageNavigationBar.css';

export default class PageNavigationBar extends Component {
  constructor (props) {
    super(props);
  }
  
  render () {
    return (
      <div class="pages d-flex flex-row align-items-center">
        <div class="page_current">
          <span>1</span>
          <ul class="page_selection">
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
          </ul>
        </div>
        <div class="page_total"><span>of</span> 3</div>
        <div id="next_page" class="page_next"><a href="#"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></div>
      </div>
    );
  }
}
