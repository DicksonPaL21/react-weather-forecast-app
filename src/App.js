import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles.scss';

import SignIn from './components/SignIn';
import Home from './components/Home';
import Weather from './components/Weather';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const { isLoading, isAuthenticated, logout } = useAuth0();

  const routeProps = [
    //Signin Page
    {
      path: '/',
      component: SignIn,
      controller: Route,
    },
    //Home Page
    {
      path: '/home',
      isAuthenticated,
      component: Home,
      controller: ProtectedRoute,
    },
    //Weather Page
    {
      path: '/weather',
      component: Weather,
      controller: Route,
    },
  ];

  const logOutProps = {
    id: 'logout',
    type: 'button',
    className: 'btn btn-outline-light',
    onClick: () => logout({ returnTo: window.location.origin }),
  };

  return (
    <div className="App">
      {!isLoading && isAuthenticated && (
        <button {...logOutProps}>Log Out</button>
      )}
      <Router>
        <Switch>
          {routeProps.map(({ controller: Controller, ...props }, idx) => (
            <Controller exact key={idx} {...props} />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
