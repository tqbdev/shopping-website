import React, {Component} from 'react';
import TopNavigation from './TopNavigation';
import MainNavigation from './MainNavigation';

export default class Header extends Component {
  render () {
    return (
      <header class="header trans_300">
        <TopNavigation />
        <MainNavigation />
      </header>
    );
  }
}
