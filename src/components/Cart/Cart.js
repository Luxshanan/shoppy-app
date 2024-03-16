import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
class Cart extends Component {
    state = {}

    render() {
        var { cart, onQuantityChange, onCartItemDelete,
            onRemoveCart, numberOfCarts,cartNumber } = this.props;
       var {id,cartItems}=cart

       var total = 0
       cartItems.map(item => total = total + item.product.price * item.quantity)
       total = total.toFixed(2)
        function RemoveButton(props) {
            const numberOfCarts = props.numberOfCarts;
            if (numberOfCarts > 1) {
                return (<button className="btn btn-danger" type="button"
                    onClick={() => onRemoveCart(id)}>
                    <i className="fa fa-trash"></i> Remove Cart
                </button>)
            }
            else {
                return (<></>)
            }
        }
        

        return (
            <div >
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12">
                        <div className="card card-registration card-registration-2" style={{ borderRadius: 15 }}>
                            <div className="card-body p-0">
                                <div className="row g-0">

                                    <div className="col-12">
                                        <div className='text-right'>
                                            <RemoveButton numberOfCarts={numberOfCarts} />


                                        </div>
                                        <div className="p-5">

                                            <div className="d-flex justify-content-between align-items-center mb-5">
                                                <h4 className="fw-bold mb-0 text-black">Shopping Cart {cartNumber}</h4>
                                                <h6 className="mb-0 text-muted">{cartItems.length} Items</h6>
                                            </div>
                                            <hr className="my-4" />
                                            {cartItems.map(item => (
                                                <CartItem key={item.product.id} cartId={id}
                                                    cartItem={item}
                                                    onQuantityChange={onQuantityChange}
                                                    onCartItemDelete={onCartItemDelete} />
                                            ))}

                                            <div className="d-flex justify-content-between mb-5">
                                                <h5 className="text-uppercase">Total price</h5>
                                                <h5>Rs. {total}</h5>
                                            </div>


                                            <div className='text-right'>
                                                <Link to={`/checkout/${cart.id}`} className="btn btn-danger" type="button" >
                                                    Proceed To Checkout
                                                </Link>
                                            </div>


                                            {/* <div className="pt-5">
                                                <h6 className="mb-0"><a href="#!" className="text-body"><i
                                                    className="fas fa-long-arrow-alt-left me-2"></i>Back to shop</a></h6>
                                            </div> */}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Cart;

