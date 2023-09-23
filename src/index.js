import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './styles/reset.css';
import './index.css';
import App from './app/App';
import config from './config.json';
import {GoogleOAuthProvider} from '@react-oauth/google';

import {Provider} from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <GoogleOAuthProvider clientId={config.googleClientId}>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </GoogleOAuthProvider>
    </React.StrictMode>,
);