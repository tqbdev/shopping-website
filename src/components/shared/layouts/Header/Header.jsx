import React, {Component} from 'react';
import TopNavigation from './TopNavigation';
import MainNavigation from './MainNavigation';

import './Header.css';

export class Header extends Component {
  render () {
    return (
      <header className="header trans_300">
        <TopNavigation />
        <MainNavigation />
      </header>
    );
  }
}
