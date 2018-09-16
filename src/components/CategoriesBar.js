import React, {Component} from 'react';

import './CategoriesBar.css';

export default class CategoriesBar extends Component {
  render () {
    return (
      <div class="banner">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="banner_item align-items-center" id="women">
                <div class="banner_category">
                  <a href="#">women's</a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="banner_item align-items-center" id="accessories">
                <div class="banner_category">
                  <a href="#">accessories's</a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="banner_item align-items-center" id="men">
                <div class="banner_category">
                  <a href="#">men's</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
