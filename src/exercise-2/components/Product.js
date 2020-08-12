import React, { Component } from 'react';
import { Route, Switch, Link, useRouteMatch } from 'react-router-dom';
import Data from '../mockups/data.json';

class Product extends Component {
    

    render() {
        const index = this.props.match.params.id;
        let data = {}
        if (index == 1) {
            data = Data.bicycle;
        } else if(index == 2) {
            data = Data.TV;
        } else  if(index == 3) {
            data = Data.pencil;
        }
        return (
            <section className='route'>
                <h1>Product Details:</h1>
                <p>Name: {data.name}</p>
                <p>id: {data.id}</p>
                <p>Price: {data.price}</p>
                <p>Quantity: {data.quantity}</p>
                <p>Desc: {data.desc}</p>
                <p>URL: /products/{index}</p>
            </section>
        );
    }
}

export default Product;