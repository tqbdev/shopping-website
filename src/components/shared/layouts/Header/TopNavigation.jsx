import React, {Component} from 'react';

import './TopNavigation.css';

export default class TopNavigation extends Component {
  render () {
    return (
      <div className="top_nav">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="top_nav_left">free shipping on all u.s orders over $50</div>
            </div>
            <div className="col-md-6 text-right">
              <div className="top_nav_right">
                <ul className="top_nav_menu">
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
