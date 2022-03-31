import React from 'react';
import { useHistory } from 'react-router-dom';
import { GithubLoginButton } from 'react-social-login-buttons';
import { useAuth0 } from '@auth0/auth0-react';

// Components
import Card from './Card';
import Loader from './Loader';

const SingIn = ({ ...props }) => {
  const history = useHistory();
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();

  if (isAuthenticated) {
    history.push('/home');
  }

  if (isLoading) {
    return <Loader />;
  }

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
