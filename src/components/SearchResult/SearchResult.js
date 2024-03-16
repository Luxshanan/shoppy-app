import React, { Component, useEffect, useState } from 'react';

import { getAllProducts, getProductsByCategory } from '../../services/ProductService';
import ProductList from '../ProductList/ProductList';

class SearchResult extends Component {

    state = { products: [] }


    componentDidMount() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const searchQuery = urlParams.get("search")
   



       
        if (searchQuery) {

            var products = []
            getAllProducts().then(
                response => {
                    products = response
                    var productsFilteredBySearch = []
                    if (searchQuery.trim().length === 0) {
                        productsFilteredBySearch = products
                    }
                    else {
                        productsFilteredBySearch = products.filter(
                            product => product.productName.toLowerCase().includes(searchQuery.toLowerCase()))

                    }

                    this.setState({ products: productsFilteredBySearch })
                }

            )
        }
        else{
            getAllProducts().then(
                response => {
                    products = response

                    this.setState({ products: products })
                }

            )
        }

    }


    render() {

        return (
            <div className='container'>
                <h5>Search Results</h5>
                <br/> 
                <ProductList products={this.state.products}  />
            </div>
        );
    }
}

export default SearchResult;



