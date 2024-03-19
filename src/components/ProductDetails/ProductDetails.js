import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import AuthService from '../../services/AuthService';
import { getProductById } from '../../services/ProductService';

function ProductDetails(props) {
    const { productId } = useParams()
    const [product, setProduct] = useState()
    const { onAddToCart, cartIds, onBuyNow } = props;
    const user = AuthService.getCurrentUser();

    useEffect(() => {
        getProductById(productId).then(
            response => {
                setProduct(response)
            }

        )

    }, [])



    return (


        <>
            {
                product ?
                    <div>
                        <div className="container mt-5 mb-5">
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className=" p-3">
                                                    <div className="text-center p-4"> <img id="main-image" src={product.productImageUrl} width="250" /> </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className=" p-4">

                                                    <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand">{product.productCategory.categoryName}</span>
                                                        <h5 className="text-uppercase">{product.productName}</h5>
                                                        <div className="price d-flex flex-row align-items-center">
                                                            Rs {product.price}
                                                        </div>
                                                    </div>
                                                    <p > {product.productDescription}</p>
                                                    <div>
                                                        <button className="btn btn-warning mt-3 " type="button" onClick={() => user ? onBuyNow(product) : window.location.href = '/login'} >
                                                            <i className="fa fa-shopping-cart"></i> Buy Now
                                                        </button>
                                                    </div>
                                                    {
                                                        cartIds.length > 1 ? (
                                                            <div className="dropdown">
                                                                <button className="btn btn-danger mt-3 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="fa fa-shopping-cart"></i> Add to Cart
                                                                </button>
                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                    {cartIds.map((cartId, index) =>
                                                                        <a className="dropdown-item" onClick={() => onAddToCart(product, cartId)} key={"pr" + cartId}>Cart #{index + 1}</a>
                                                                    )}

                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <button className="btn btn-danger mt-3 " type="button"
                                                                onClick={() => user ? onAddToCart(product, cartIds[0]) : window.location.href = '/login'} >
                                                                <i className="fa fa-shopping-cart"></i> Add to Cart
                                                            </button>
                                                        )

                                                    }





                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : <></>
            }

        </>

    )
}

export default ProductDetails;