import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles.scss';

import SignIn from './components/SignIn';
import Home from './components/Home';
import Weather from './components/Weather';

function App() {
  const { user, isLoading, logout } = useAuth0();

  return (
    <div className="App">
      {user && !isLoading && (
        <button
          id="logout"
          type="button"
          className="btn btn-outline-light"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Log Out
        </button>
      )}
      <Router forceRefresh={true}>
        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/weather">
            <Weather />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
