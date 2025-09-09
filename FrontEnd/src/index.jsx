import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './style.css'
import reportWebVitals from './setting stuff/reportWebVitals.js';
import { ProviderAuth } from './AuthContext/index.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProviderAuth>
      <App />
    </ProviderAuth>
  </React.StrictMode>
);


reportWebVitals();
