import React, { Component } from 'react';
import Product from '../Product/Product';
class ProductList extends Component {
    state = {}


    
    render() {
        const { products } = this.props;
        return (


            
                <div className="row">
                    {products.map(product => (
                        <Product
                            key={product.id}
                            product={product}
                             />
                    ))}
                </div>
            
        );
    }
}

export default ProductList;