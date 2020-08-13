import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  NavLink
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
            <NavLink exact className='link' activeStyle={{ textDecoration: `underline` }} to="/"
              isActive={
                (match, location) => (match ||
                  (location.pathname !== '/goods'
                    && location.pathname !== '/products'
                    && location.pathname !== '/myProfile'
                    && location.pathname !== '/about'
                    && location.pathname.startsWith("/products/")
                  )
                )
              }
            >Home</NavLink>
            <NavLink className='link' activeStyle={{ textDecoration: `underline` }}
              isActive={
                (match, location) => (match || location.pathname === '/goods')
              }
              to="/products" >Products</NavLink>
            <NavLink className='link' activeStyle={{ textDecoration: `underline` }} to="/about">About Us</NavLink>
            <NavLink className='link' activeStyle={{ textDecoration: `underline` }} to="/myProfile">My Profile</NavLink>
          </nav>
        </header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path={'/products', '/goods'} component={Products} />
          <Route exact path="/products/:id" component={Product} />
          <Route exact path='/myProfile' component={MyProfile} />
          <Route exact path='/about' component={About} />
        </Switch>
      </Router>
    );
  }
}

export default App;