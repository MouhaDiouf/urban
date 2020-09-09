import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';

function App() {
  return (
    //BEM
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/checkout">
            <div className="checkout__left">
              <img
                className="checkout__ad"
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt=""
              />
            </div>
            <div className="checkout__right"></div>
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
