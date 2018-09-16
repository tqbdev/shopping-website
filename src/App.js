import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header/index';
import Banner from './components/Banner';
import CategoriesBar from './components/CategoriesBar';
import NewArrivals from './components/NewArrivals';
import Deals from './components/Deals';
import ShippingInformation from './components/ShippingInformation';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <CategoriesBar />
        <NewArrivals />
        <Deals />
        <ShippingInformation />
        <Footer />
      </div>
    );
  }
}

export default App;
