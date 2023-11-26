import React from 'react';
import ReactDOM from 'react-dom';

// polyfill
import 'core-js'

import 'index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
