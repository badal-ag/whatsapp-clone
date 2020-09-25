import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="Visit Github"
          href="https://github.com/badal-ag"
          target="_blank"
          rel="noopener noreferrer"
        >
           Visit Github
        </a>
      </header>
    </div>
  );
}

export default App;
