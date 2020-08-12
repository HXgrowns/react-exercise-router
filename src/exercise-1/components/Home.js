import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <section className = 'route'>
                <p>This is a beautify Home Page</p>
                <p>And url is {this.props.location.pathname}</p>
            </section>
        );
    }
}

export default Home;