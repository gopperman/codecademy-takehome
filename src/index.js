import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import App from './App.js'

import './styles.css';

const ui =
  <Provider store={store}>
    <App />
  </Provider>


ReactDOM.render(ui, document.getElementById('root'))
