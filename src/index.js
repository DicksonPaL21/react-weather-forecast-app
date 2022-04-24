import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const providerProps = {
  domain: process.env.REACT_APP_AUTH0_DOMAIN,
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
  redirectUri: window.location.origin,
};

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider {...providerProps}>
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
