import React, { Component } from 'react';
import Banner from '../../components/HomePage/Banner/Banner';
import CategoriesBar from '../../components/HomePage/CategoriesBar/CategoriesBar';
import NewArrivals from '../../components/HomePage/NewArrivals/NewArrivals';
import Deals from '../../components/HomePage/Deals/Deals';

import { ShippingInformation } from '../../components/shared';

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
