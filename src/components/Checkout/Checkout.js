import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getCart } from '../../services/CartService';


function Checkout(props) {
    const { cartId } = useParams()
    const [cart, setCart] = useState()
    const [total, setTotal] = useState()
    const [shippingAddress, setShippingAddress] = useState()
    const {onCreateOrder}=props;

    useEffect(() => {
        getCart(cartId).then(
            response => {
                var cartTotal = 0
                response.cartItems.map(item => cartTotal = cartTotal + item.product.price * item.quantity)
                cartTotal = cartTotal.toFixed(2)
                setCart(response)
                setTotal(cartTotal)
            }
        )

    }, [])


    
   


    return (
        
        <>
            {
                cart ?
                    <div >

                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12">
                                <div className="card card-registration card-registration-2" style={{ borderRadius: 15 }}>
                                    <div className="card-body p-0">
                                        <div className="row g-0">

                                            <div className="col-8">

                                                <div className="p-5">

                                                    <div className="d-flex justify-content-between align-items-center mb-5">
                                                        <h4 className="fw-bold mb-0 text-black">Your Order Details </h4>
                                                        <h6 className="mb-0 text-muted">{cart.cartItems.length} Items</h6>
                                                    </div>
                                                    
                                                    <hr className="my-4" />
                                                    {cart.cartItems.map(item => (
                                                        <div key={item.id}>
                                                            <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                                <div className="col-md-2 col-lg-2 col-xl-2">
                                                                    <img
                                                                        src={item.product.productImageUrl}
                                                                        className="img-fluid rounded-3" alt={item.product.productName} />
                                                                </div>
                                                                <div className="col-md-3 col-lg-3 col-xl-3">
                                                                    <span className="text-muted">{item.product.productCategory.categoryName}</span>
                                                                    <h6 className="text-black mb-0">{item.product.productName}</h6>
                                                                </div>
                                                                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">


                                                                    <h6 className="mb-0"> Quantity: {item.quantity}</h6>

                                                                </div>
                                                                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                                    <h6 className="mb-0">Unit price: Rs. {item.product.price}</h6>
                                                                </div>

                                                            </div>

                                                            <hr className="my-4" />

                                                        </div>
                                                    ))}

                                                    <div className="d-flex justify-content-between mb-5">
                                                        <h5 className="text-uppercase">Total price</h5>
                                                        <h5>Rs. {total}</h5>
                                                    </div>


                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="p-5">

                                                    <div className="row">

                                                        <div className="col-md-8 order-md-1">
                                                            <h4 className="mb-3">Shipping Details</h4>
                                                            <form className="needs-validation" noValidate="" >

                                                                <div className="mb-3">

                                                                    <textarea className="form-control" value={shippingAddress} onChange={e=> setShippingAddress(e.target.value)} id="address" rows={3} placeholder="Shipping Address" required ></textarea>
                                                                    <div className="invalid-feedback"> Please enter your shipping address. </div>
                                                                </div>


                                                                <hr className="mb-4" />


                                                                <button className="btn btn-primary btn-lg btn-block" onClick={e => {e.preventDefault();onCreateOrder({cartId,shippingAddress})}}>CHECKOUT</button>
                                                            </form>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : <></>
            }
        </>);

}

export default Checkout;