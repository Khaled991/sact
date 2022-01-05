import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/main.scss';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
