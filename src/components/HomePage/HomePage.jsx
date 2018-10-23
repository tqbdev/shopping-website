import React, { Component } from 'react';
import Banner from './Banner/Banner';
import CategoriesBar from './CategoriesBar/CategoriesBar';
import NewArrivals from './NewArrivals/NewArrivals';
import Deals from './Deals/Deals';

import { ShippingInformation } from '../shared';

export default class HomePage extends Component {
  render () {
    return (
      <div className="super-container">
        <Banner />
        <CategoriesBar />
        <NewArrivals />
        <Deals />
        <ShippingInformation />
      </div>
    );
  }
}
