import React, { Component } from 'react';

import UserReview from './UserReview/UserReview';

import './UserReviewList.css';

export default class UserReviewList extends Component {
  render () {
    return (
      <div className="col-lg-6 reviews_col">
        <div className="tab_title reviews_title">
          <h4>Reviews (2)</h4>
        </div>

        <UserReview></UserReview>
        <UserReview></UserReview>
      </div>
    );
  }
}
