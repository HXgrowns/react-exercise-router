import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <section className = 'route'>
                <p>Company:ThoughtWorks Local</p>
                <p className = 'about-p'>Location:Xian</p>
                
                <p>For more information,please</p>
                <p>view our <a href='#' onClick={() => { this.props.history.push('/') }} >website.</a></p>
            </section>
        );
    }
}

export default About;