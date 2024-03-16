import React, { Component } from 'react';

import ProductCategories from '../ProductCategories/ProductCategories'; 
import ProductList from '../ProductList/ProductList';



class Home extends Component {
    
    state = {
        
    }

    
    render() {
        const {products}=this.props
        return (

            <div>  
                <div className="container">                                      
                <ProductCategories/>
                <ProductList products={products}  />
                </div>      
            </div>
        );
    }
}

export default Home;