import React, { Component } from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import CategoriesBar from './components/CategoriesBar/CategoriesBar';
import NewArrivals from './components/NewArrivals/NewArrivals';
import Deals from './components/Deals/Deals';
import ShippingInformation from './components/ShippingInformation/ShippingInformation';
import Footer from './components/Footer/Footer';

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
