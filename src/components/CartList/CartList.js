import React, { Component } from 'react';

import Cart from '../Cart/Cart';
class CartList extends Component {

    render() {
        const { carts, onQuantityChange, onCartItemDelete, onAddNewCart, onRemoveCart, onProceedToCheckout } = this.props
        const numberOfCarts = carts.length
        return (
            <div className="container py-5 h-100">

                <button className="btn btn-primary" type="button" onClick={() => onAddNewCart()}>
                    <i className="fa fa-cart-plus"></i> Create New Cart
                </button>
                <br /> <br />
                {carts.map((cart, index) => (
                    <>
                        <Cart key={"cart" + cart.id} cartNumber={index + 1} cart={cart}
                            onQuantityChange={onQuantityChange}
                            onCartItemDelete={onCartItemDelete}
                            onRemoveCart={onRemoveCart}
                            numberOfCarts={numberOfCarts}
                            onProceedToCheckout={onProceedToCheckout} /><br />
                    </>
                ))}

            </div>

        );
    }
}

export default CartList;