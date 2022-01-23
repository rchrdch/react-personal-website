import React from 'react';
import './index.css';
import App from './App';
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,  
  document.getElementById('root')
);
