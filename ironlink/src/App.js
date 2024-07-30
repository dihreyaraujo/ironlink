import React, { Component } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route exact path="/" element={ <Home /> } />
        </Routes>
      </div>
    );
  }
}

export default App;
