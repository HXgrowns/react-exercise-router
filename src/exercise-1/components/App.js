import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MyProfile from "./MyProfile";
import Home from "./Home";
import About from "./About";
import '../styles/App.css';

class App extends Component {
  
  render() {
    return (
      <Router>
        <header className = 'header'>
          <nav className='nav'>
            <Link className = 'link' to="/" >Home</Link>
            <Link className = 'link' to="/about">About Us</Link>
            <Link className = 'link' to="/myProfile">My Profile</Link>
          </nav>
        </header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/myProfile' component={MyProfile} />
          <Route exact path='/about' component={About} />
        </Switch>
      </Router>
    );
  }
}

export default App;