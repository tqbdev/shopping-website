import React, { Component } from 'react';

import './TabSelector.css';

export default class TabSelector extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="row">
				<div className="col">
					<div className="tabs_container">
						<ul className="d-flex flex-sm-row flex-column align-items-left align-items-md-center justify-content-center">
							<li className="tab active"><span>Description</span></li>
							<li className="tab"><span>Additional Information</span></li>
							<li className="tab"><span>Reviews (2)</span></li>
						</ul>
					</div>
				</div>
			</div>
    );
  }
}