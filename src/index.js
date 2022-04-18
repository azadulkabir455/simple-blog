import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import ReactDOM from 'react-dom';
import { FormInfo } from './Context/Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <FormInfo>
      <Router>
        <App />
      </Router>
    </FormInfo>
  </React.StrictMode>,
  document.getElementById('root')
);

