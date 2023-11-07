import './App.css';

import logo from './logo.svg';

import React from 'react';
import TestComponent from './Components/test';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TestComponent />
      </header>
    </div>
  );
}

export default App;
