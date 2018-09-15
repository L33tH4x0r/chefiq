import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    );
  }
}

export default App;
