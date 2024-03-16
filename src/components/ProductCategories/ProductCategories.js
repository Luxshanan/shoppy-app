import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getAllCategories } from '../../services/ProductCategoryService';

class ProductCategories extends Component {
    state = {
        productCategories: [
        ]
    }

    componentDidMount() {
        getAllCategories().then(
            response => {
                console.log("PC",response)
                this.setState({ productCategories: response })
            }

        )
    }

    render() {
        return (
            <div className='row'>

                {
                    this.state.productCategories.map(
                        productCategory => (
                            <div key={productCategory.id} className='col-3'>
                                <div className="card bg-light mb-3" style={{ maxWidth: 18 + 'rem' }}>
                                    <div className="card-body text-center">
                                        <Link to={`/shop/category?category=${productCategory.id}`} className="card-title text-decoration-none text-reset h5 stretched-link" >
                                            <i className="fa fa-cutlery"></i> &nbsp; {productCategory.categoryName}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    )
                }

            </div>
        );
    }
}

export default ProductCategories;