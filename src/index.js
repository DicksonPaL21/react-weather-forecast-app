import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const providerProps = {
  domain: 'dev-qpeuo7jr.us.auth0.com',
  clientId: 'HA5tZRjaMXWckVmTUYAA0IoNfP2mBasT',
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
