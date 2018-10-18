import React, { Component } from 'react';

import TabSelector from './TabSelector/TabSelector';
import AdditionalInformation from './AdditionalInformation/AdditionalInformation';
import Reviews from './Reviews/Reviews';
import Descriptions from './Descriptions/Descriptions';

import './Tabs.css';

export default class Tabs extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return(
      <div className="tabs_section_container">
		    <div className="container">
          <TabSelector></TabSelector>
          <div className="row">
            <div className="col">
              <Descriptions></Descriptions>
            </div>
          </div>
        </div>
      </div>
    );
  }
}