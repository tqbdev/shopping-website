import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header, Footer } from './components/shared';

import routes from './routes';

import './App.css';

const RouteWithSubRoutes = route => {
  if (route.path === '/') {
    return <Route
      exact
      path={route.path}
      render={props => (
        <route.component {...props} />
      )}
    />
  }
  return <Route
    path={route.path}
    render={props => (
      <route.component {...props} />
    )}
  />
};

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header></Header>
            {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
