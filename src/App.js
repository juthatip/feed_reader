import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Feed } from './Components/Feed';
import { Header } from './Components/Header';
import { PageContent } from './Components/PageContent';
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
