import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';

class MyProfile extends Component {
    render() {
        return (
            <section className = 'route'>
                <p>Username:XXX</p>
                <p>Gender:Female</p>
                <p>Work:IT Industry</p>
                <p>Website:`{this.props.location.pathname}`</p>
            </section>
        );
    }
}

export default MyProfile;