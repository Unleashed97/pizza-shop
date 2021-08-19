import React from 'react'

import './Cart.scss'

import cart from './cart.svg'

const Cart = () => {
    return (
        <button className="cart">
            <span className="cart__total-price">514 ₽</span>
            <span className="cart__separator"></span>
            <span className="cart__counter">
                <img className="cart__image" src={cart} alt="shopping cart" /> 3
            </span>
        </button>
    )
}

export default Cart
