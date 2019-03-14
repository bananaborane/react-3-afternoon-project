import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main'
import Header from './components/Header'
import Buttons from './components/Buttons'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main/>
      </div>
    );
  }
}

export default App;
