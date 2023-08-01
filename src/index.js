import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

ReactDOM.render(
  <Auth0Provider
    domain="dev-6dz818s8ll3lcv4j.us.auth0.com"
    clientId="x65QDqjL3lEd6XthjlGbAYo5GzArRXJ3"
    redirectUri={window.location.origin}
  >
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </Auth0Provider>,
  document.getElementById('root')
);
