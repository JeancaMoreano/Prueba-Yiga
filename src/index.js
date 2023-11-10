import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/store.js';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
