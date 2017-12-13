import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js';
import SignInRegister from './SignInRegister';
import Groups from './Groups'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Groups />
      </div>
    );
  }
}

export default App;
