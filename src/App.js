import React, { Component } from 'react';
import Navbar from './components/layout/Navbar.js'
import UserItem from './components/users/UserItem.js'
import './App.css';

class App extends Component {

  render() {

    return (
      <div className="app">  <nav className="navbar bg-primary">
        <Navbar title='Github Finder' icon='fab fa-github' />
      </nav>
        <UserItem />
      </div>

    );
  }
}

export default App;
