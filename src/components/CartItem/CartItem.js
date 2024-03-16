import React, { Component } from 'react';

class CartItem extends Component {
    state = {}
    render() {
        const { cartId, cartItem, onQuantityChange, onCartItemDelete, checkoutMode } = this.props
        var { product, quantity } = cartItem

        return (

            <div>
                <div className="row mb-4 d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                        <img
                            src={product.productImageUrl}
                            className="img-fluid rounded-3" alt={product.productName} />
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                        <h6 className="text-muted">{product.productCategory.categoryName}</h6>
                        <h6 className="text-black mb-0">{product.productName}</h6>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                        <button className="btn btn-link px-2"
                            onClick={() => (quantity != 1) ? onQuantityChange(product.id, --quantity, cartId) : null}
                        >
                            <i className="fa fa-minus"></i>
                        </button>

                        <input id="quantity" min="0" value={quantity} name="quantity" type="number"
                            className="form-control form-control-sm" readOnly />

                        <button className="btn btn-link px-2"
                            onClick={() => onQuantityChange(product.id, ++quantity, cartId)}
                        >
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                        <h6 className="mb-0">Rs. {product.price}</h6>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                        <button className="btn text-muted px-2"
                            onClick={() => onCartItemDelete(product.id, cartId)}
                        >
                            <i className="fa fa-times"></i>
                        </button>

                    </div>
                </div>

                <hr className="my-4" />

            </div>);
    }
}

export default CartItem;