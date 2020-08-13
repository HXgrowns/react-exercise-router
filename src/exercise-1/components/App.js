import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
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
            <NavLink exact className = 'link' to="/"  activeStyle= {{textDecoration: `underline`}}>Home</NavLink>
            <NavLink className = 'link' to="/about" activeStyle= {{textDecoration: `underline`}}>About Us</NavLink>
            <NavLink className = 'link' to="/myProfile" activeStyle= {{textDecoration: `underline`}}>My Profile</NavLink>
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