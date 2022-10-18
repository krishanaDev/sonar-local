import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  //'Empty block statement' code smell
  const sum = (a: number, b: number) =>{
    const c = a;
    const d = b;
    const password = a*b;
    return c + d;
  }
  const mul = (a: number, b: number) =>{
    const c = a;
    const d = b;
    const password = a*b;
    return c + d;
  }
  console.log(sum(2,3));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
