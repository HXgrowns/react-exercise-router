import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import MyProfile from "./MyProfile";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import '../styles/App.css';
import Product from "./Product";

class App extends Component {

  render() {
    return (
      <Router>
        <header className='header'>
          <nav className='nav'>
            <Link className='link' to="/" >Home</Link>
            <Link className='link' to="/products" >Products</Link>
            <Link className='link' to="/about">About Us</Link>
            <Link className='link' to="/myProfile">My Profile</Link>
          </nav>
        </header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/goods' component={Products} />
          <Route exact path="/products/:id" component={Product} />
          <Route exact path='/myProfile' component={MyProfile} />
          <Route exact path='/about' component={About} />
          <Route component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;