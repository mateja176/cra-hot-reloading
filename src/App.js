import React from 'react';
import { hot } from 'react-hot-loader';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Create React App with Hot Reloading</h1>
        <h2>Thanks to</h2>
        <ul>
          <li>
            <a href="https://github.com/cdharris/react-app-rewire-hot-loader">
              React Hot Loader
            </a>
          </li>
          <li>
            <a href="https://github.com/cdharris/react-app-rewire-hot-loader">
              React App Rewired
            </a>
          </li>
          <li>
            <a href="https://github.com/cdharris/react-app-rewire-hot-loader">
              React App Rewire Hot Loader
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default hot(module)(App);
