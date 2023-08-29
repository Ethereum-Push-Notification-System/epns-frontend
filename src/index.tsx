import * as dotenv from 'dotenv';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './i18n';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from 'ethers';

dotenv.config();

function getLibrary(provider: any) {
  // this will vary according to whether you use e.g. ethers or web3.js
  const gottenProvider = new ethers.providers.Web3Provider(provider, 'any');
  return gottenProvider;
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </Web3ReactProvider>

);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
