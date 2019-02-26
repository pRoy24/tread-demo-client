import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingContainer from './components/main/LandingContainer';
import TopNavContainer from './components/nav/TopNavContainer';
import AuthenticationContainer from './components/auth/AuthenticationContainer'; 
import ProfileWallContainer from './components/profile/ProfileWallContainer';
import PinLinkContainer from './components/link/PinLinkContainer';

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
              <Route path="/user/:userName" component={ProfileWallContainer}/>
              <Route path="/link/:linkId" component={PinLinkContainer}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
