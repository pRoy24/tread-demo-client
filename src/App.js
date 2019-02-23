import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './components/main/Landing';
import TopNavContainer from './components/nav/TopNavContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavContainer/>
        <Landing/>
      </div>
    );
  }
}

export default App;
