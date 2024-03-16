import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProductStyle.css';
class Product extends Component {

    state = {}

    

    render() {
        
        const { product } = this.props;

        return (

            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4" style={{ marginTop: 10, marginBottom: 10 }}>
                <div className="card card-product" >
                    <div>
                        <img
                            src={product.productImageUrl}
                            className="w-100 card-img-top"
                            alt={product.productName}
                        />

                    </div>
                    <div className="card-body">
                        <h4 className="card-title"><Link to={`/products/${product.id}`} className="text-decoration-none text-reset">{product.productName}</Link></h4>
                        <h6 className="card-subtitle mb-2 text-muted">{product.productCategory.categoryName}</h6>

                        <div className="buy d-flex justify-content-between align-items-center">
                            <div className="price text-success"><h5 className="mt-4">Rs. {product.price}</h5></div>
                           
                            
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Product;