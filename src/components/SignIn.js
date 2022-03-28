import React, { useEffect } from 'react';
import { GithubLoginButton } from 'react-social-login-buttons';
import { useAuth0 } from '@auth0/auth0-react';

// Components
import Card from './Card';

const SingIn = () => {
  const { user, isLoading, isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (user && !isLoading && isAuthenticated) window.location.replace('/home');
  }, [user, isLoading, isAuthenticated]);

  return (
    <div className="container">
      <div className="row login-container">
        <div className="col-12 col-md-7">
          <h1 className="display-4">
            Weather <span className="fw-bold">Forecast</span>
          </h1>
          <p className="text-white">
            Welcome to the weather forecast web application. Please login with
            your Github user to use the application and view weather in your
            city.
          </p>
        </div>
        <div className="col-12 col-md-5">
          <Card
            className="shadow-lg"
            style={{ background: 'rgba(55, 61, 75, 0.3)' }}
          >
            <GithubLoginButton onClick={() => loginWithRedirect()} />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SingIn;
