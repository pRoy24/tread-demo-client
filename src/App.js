import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './components/main/Landing';
import TopNavBar from './components/nav/TopNavBar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavBar/>
        <Landing/>
      </div>
    );
  }
}

export default App;
