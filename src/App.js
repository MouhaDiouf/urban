import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51HSPjQLlgXiGBP1wSvNZUQjiyAIZXxGeRZpHJlK8sVd6vzbBA5BRT5zCARVVWQSZ6gacxoWGDtnTb41h3JC4S3kr00HU8COS2d'
);

function App() {
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('The user is >>>> ', authUser);
      if (authUser) {
        //the user is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);
  return (
    //BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
