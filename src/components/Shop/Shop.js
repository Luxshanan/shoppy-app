import React, { Component, useEffect, useState } from 'react';

import { getAllProducts, getProductsByCategory } from '../../services/ProductService';
import ProductList from '../ProductList/ProductList';

class Shop extends Component {

    state = { products: [], productCategory: "", queryString: "" }


    componentDidMount() {
        const queryString = window.location.search;
        this.loadProductData(queryString)

    }

    componentDidUpdate() {
        const queryString = window.location.search;

        if (queryString !== this.state.queryString) {
            this.loadProductData(queryString)
        }
    }

    loadProductData(queryString){
        this.setState({ queryString: queryString });
            const urlParams = new URLSearchParams(queryString);

            const productCategoryId = urlParams.get("category")




            if (productCategoryId) {
                getProductsByCategory(productCategoryId).then(
                    response => {
                        this.setState({ products: response, productCategory: response[0].productCategory.categoryName })
                    }
                )
            }
            else {
                getAllProducts().then(
                    response => {
                        var products = response

                        this.setState({ products: products, productCategory: null })
                    }

                )
            }
    }

    render() {

        return (
            <div className='container'>
                <h5>Explore {this.state.productCategory ? this.state.productCategory : "Products"}</h5>
                <br />
                <ProductList products={this.state.products} />
            </div>
        );
    }
}

export default Shop;



