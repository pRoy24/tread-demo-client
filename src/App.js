import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingContainer from './components/main/LandingContainer';
import TopNavContainer from './components/nav/TopNavContainer';
import AuthenticationContainer from './components/auth/AuthenticationContainer'; 
import history from './history';
import {Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <TopNavContainer/>
              <Route exact path="/" component={LandingContainer}/>
              <Route path="/auth/callback" component={AuthenticationContainer}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
