import React, { useState } from 'react'

import Button from '../Button/Button'

import './CartButton.scss'

import cart from './cart.svg'

const Cart = () => {
    const [sum, setSum] = useState(0)

    const [amountOfProducts, setAmountOfProducts] = useState(0)

    return (
        <Button className="btn--cart">
            <span className="cart-button__sum">{sum} ₽</span>
            <span className="cart-button__separator"></span>
            <span className="cart-button__counter">
                <img
                    className="cart-button__image"
                    src={cart}
                    alt="shopping cart"
                />
                {amountOfProducts}
            </span>
        </Button>
    )
}

export default Cart
