import React, { Component } from 'react';
import { Feed } from './Components/Feed';
import { Header } from './Components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Feed />

      </div>
    );
  }
}

export default App;
