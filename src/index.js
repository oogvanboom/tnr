import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TheUnit from './TheUnit';
import reportWebVitals from './reportWebVitals';

const SEED_SELECTOR = 'SEED'  
const SEED = ReactDOM.createRoot(
  document.querySelector(SEED_SELECTOR)
)
SEED.render(
  <React.StrictMode>
    <TheUnit />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
