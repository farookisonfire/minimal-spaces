import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import './index.css';

window.store = configureStore();

render(
  <Provider store={window.store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
