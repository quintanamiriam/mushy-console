import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js';
import SignInRegister from './SignInRegister';
import CreateTeam from './CreateTeam'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <CreateTeam />
      </div>
    );
  }
}

export default App;
