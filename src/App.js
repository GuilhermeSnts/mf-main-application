import logo from "./logo.svg";
import "./App.css";
import React from 'react'
import { SignInPage } from "mf-auth-module";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SignInPage/>
      </header>
    </div>
  );
}

export default App;
