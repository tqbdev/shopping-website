import React, { Component } from 'react';

import HomePage from './components/HomePage/HomePage';
import CategoryPage from './components/CategoryPage/CategoryPage';

class App extends Component {
  render() {
    return (
      <div>
        <CategoryPage />
      </div>
    );
  }
}

export default App;
