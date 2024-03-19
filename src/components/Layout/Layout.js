import React, { Component } from 'react';
import Home from '../Home/Home';

import { getAllProducts } from '../../services/ProductService';

import { BrowserRouter, Routes, Route } from "react-router-dom";


import NavigationBar from '../NavigationBar/NavigationBar';

import ProductDetails from '../ProductDetails/ProductDetails';

import CartList from '../CartList/CartList';
import Shop from '../Shop/Shop';
import Checkout from '../Checkout/Checkout';
import { createCart, getCartsByUserAndStatus, removeCart, updateCart } from '../../services/CartService';
import { addCartItem, removeCartItem, updateCartItem } from '../../services/CartItemService';
import UserRegistration from '../UserRegistration/UserRegistration';
import Login from '../Login/Login';
import AuthService from '../../services/AuthService';
import { createOrder } from '../../services/OrderService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchResult from '../SearchResult/SearchResult';



class Layout extends Component {


    state = {
        products: [],
        carts: [{ "id": 1, "cartItems": [], "cartStatus": "Pending" }],
        productsFilteredBySearch: [],
        cartInCheckout: {},
        user: AuthService.getCurrentUser()
    }

    componentDidMount() {
        getAllProducts().then(
            response => {
                this.setState({ products: response, productsFilteredBySearch: response })
            }
        )
        if (this.state.user) {
            getCartsByUserAndStatus(this.state.user.id, "Pending").then(
                response => {
                    const carts = response;
                    if (carts.length === 0) {

                        const cart = { "userId": this.state.user.id, "cartStatus": "Pending", "cartItems": [] }
                        createCart(cart).then(
                            res => {
                                this.setState({ carts: [res] })
                            }
                        )
                    } else {
                        this.setState({ carts: carts })
                    }
                }
            )
        }
    }



    handleAddToCart = (product, cartId) => {
        var carts = [...this.state.carts]
        var cartIndex = carts.findIndex(cart => cart.id == cartId)
        var cart = carts[cartIndex]


        var cartItemIndex = cart.cartItems.findIndex(cartItem => cartItem.product.id == product.id)
        if (cartItemIndex == -1) {

            var cartItem = { "cartId": cartId, "product": product, "quantity": 1 }
            addCartItem(cartItem).then(
                res => {
                    cartItem = res
                    carts[cartIndex].cartItems.push(cartItem)
                    this.setState({ carts: carts })
                    toast.success("Item Added To Cart")
                }
            )
        } else {

            var cartItem = carts[cartIndex].cartItems[cartItemIndex]
            const cartItemQuantity = cartItem.quantity + 1
            this.handleQuantityChange(product.id, cartItemQuantity, cartId)
            toast.success("Item Added To Cart")
        }

    }

    handleBuyNow = (product) => {
        var carts = [...this.state.carts]
        var newCart = { "userId": this.state.user.id, "cartStatus": "Pending", "cartItems": [] }
        if (carts[carts.length - 1].cartItems.length == 0) {
            this.addItemForBuyNow(product);
        } else {
            createCart(newCart).then(
                response => {
                    newCart = response
                    carts.push(newCart)
                    this.setState({ carts: carts })
                }
            ).finally(res => this.addItemForBuyNow(product))
        }
    }

    handleQuantityChange = (productId, quantity, cartId) => {
        var carts = [...this.state.carts]
        var cart = carts.find(cart => cart.id == cartId)

        var cartItems = cart.cartItems
        var cartItemIndex = cartItems.findIndex(cartItem => cartItem.product.id == productId)
        var cartItem = cartItems[cartItemIndex]
        cartItem.quantity = quantity

        updateCartItem(cartItem).then(
            res => {
                this.setState({ carts: carts })
            }
        )
    }

    handleCartItemDelete = (productId, cartId) => {

        var carts = [...this.state.carts]
        var cartIndex = carts.findIndex(cart => cart.id == cartId)
        var cart = carts[cartIndex]
        var cartItems = cart.cartItems
        var cartItemIndex = cartItems.findIndex(cartItem => cartItem.product.id == productId)
        var cartItemToRemove = cartItems[cartItemIndex]
        cartItems = cartItems.filter(cartItem => cartItem.product.id != productId)
        carts[cartIndex].cartItems = cartItems

        removeCartItem(cartItemToRemove.id).then(
            res => {
                this.setState({ carts: carts })
            }
        )
    }

    handleProductSearch = (searchQuery) => {
        var products = [...this.state.products]
        var productsFilteredBySearch = []
        if (searchQuery.trim().length === 0) {
            productsFilteredBySearch = products
        }
        else {
            productsFilteredBySearch = products.filter(
                product => product.productName.toLowerCase().includes(searchQuery.toLowerCase()))

        }


        this.setState({ productsFilteredBySearch: productsFilteredBySearch })

    }

    handleAddNewCart = () => {
        var carts = [...this.state.carts]
        var newCart = { "userId": this.state.user.id, "cartStatus": "Pending", "cartItems": [] }
        createCart(newCart).then(
            response => {
                newCart = response
                carts.push(newCart)
                this.setState({ carts: carts })
                toast.success("New Cart Created!")
            }
        )
    }

    handleRemoveCart = (cartId) => {
        removeCart(cartId).then(
            response => {
                var carts = [...this.state.carts]
                carts = carts.filter(cart => cart.id !== cartId)
                this.setState({ carts: carts })
            }
        )

    }

    handleCreateOrder = ({ cartId, shippingAddress }) => {
        var carts = [...this.state.carts]
        var checkedoutCart = carts.find(cart => cart.id == cartId)

        checkedoutCart.cartStatus = "Completed"

        const order = { "userId": this.state.user.id, "shippingAddress": shippingAddress, "cartId": cartId }
        createOrder(order).then(
            response => {
                updateCart(checkedoutCart).then(
                    res => {
                        carts = carts.filter(cart => cart.id !== cartId)
                        this.setState({ carts: carts })
                    }).finally(res => {
                        window.location.href = "/"
                        toast.success("Your Order Has Been Placed Successfully")
                    })
            }
        )
    }

    addItemForBuyNow(product) {
        var updatedCartsList = [...this.state.carts];
        var cartIndex = updatedCartsList.length - 1;
        var cart = updatedCartsList[cartIndex];


        var cartItem = { "cartId": cart.id, "product": product, "quantity": 1 };
        addCartItem(cartItem).then(
            res => {
                cartItem = res;
                updatedCartsList[cartIndex].cartItems.push(cartItem);
                this.setState({ carts: updatedCartsList });
                window.location.href = "/carts";
            }
        );
    }

    render() {
        let cartIds = this.state.carts.map(cart => cart.id)

        return (
            <>
                <BrowserRouter>
                    <NavigationBar user={this.state.user} />
                    <br /><br />

                    <Routes>

                        <Route path='/' element={<Home products={this.state.productsFilteredBySearch} />} />
                        <Route path="carts" element={<CartList carts={this.state.carts}
                            onQuantityChange={this.handleQuantityChange}
                            onCartItemDelete={this.handleCartItemDelete}
                            onAddNewCart={this.handleAddNewCart}
                            onRemoveCart={this.handleRemoveCart}
                        />} />
                        <Route path="products/:productId" element={<ProductDetails
                            onAddToCart={this.handleAddToCart} onBuyNow={this.handleBuyNow} cartIds={cartIds} />} />
                        <Route path="shop" element={<Shop />} />
                        <Route path="shop/category" element={<Shop />} />
                        <Route path="searchResult" element={<SearchResult />} />
                        <Route path="checkout/:cartId" element={<Checkout onCreateOrder={this.handleCreateOrder} />} />
                        <Route path="signup" element={<UserRegistration />} />
                        <Route path="login" element={<Login />} />
                    </Routes>


                </BrowserRouter>

            </>

        );
    }
}

export default Layout;