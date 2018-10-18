import React, { Component } from 'react';

import UserReviewList from './UserReviewList/UserReviewList';
import FormReview from './FormReview/FormReview';

import './Reviews.css';

export default class Reviews extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="tab_container active">
        <div className="row">
          <UserReviewList></UserReviewList>
          <FormReview></FormReview>
        </div>
      </div>
    );
  }
}
