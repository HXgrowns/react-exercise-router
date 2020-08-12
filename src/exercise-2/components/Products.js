import React, { Component } from 'react';
import { Route, Switch, Link, useRouteMatch } from 'react-router-dom';


class Products extends Component {
    render() {
        return (
            <section className='route products'>
                <nav>
                    <Link className='product' to="/products/1">Bicycle</Link>
                    <Link className='product' to="/products/2">TV</Link>
                    <Link className='product' to="/products/3">Pencil</Link>
                </nav>
            </section>
        );
    }
}

export default Products;