import React, {useState} from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';

const BACKEND_URL = "http://localhost:3004";

function App() {
  
  const handlebuttonClick = () => {
    axios
      .get(`${BACKEND_URL}/carindex`)
      .then((result)=> console.log(result))
      .catch((error) => console.log(error))
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handlebuttonClick}>Click here</button>
      </header>
    </div>
  );
}

export default App;
