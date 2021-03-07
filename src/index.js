import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router,} from "react-router-dom";
import  {AppProvider} from './Context'

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <AppProvider>
        <App />
      </AppProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);