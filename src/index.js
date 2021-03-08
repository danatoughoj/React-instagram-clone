import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import Home from "./Homepage";
import Profile from "./Profile"
import Navbar from "./navbar";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/profile"  component={Profile} />
    </Router>


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
