import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function ProtectedRoute({ isAuthenticated, component: Component, ...props }) {
  return (
    <Route
      {...props}
      render={(routeProps) =>
        isAuthenticated ? <Component {...routeProps} /> : <Redirect to="/" />
      }
    />
  );
}

export default ProtectedRoute;
