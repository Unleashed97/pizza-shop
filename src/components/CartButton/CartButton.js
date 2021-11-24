import React from 'react'
import { useSelector } from 'react-redux'

import Button from '../Button/Button'

import './CartButton.scss'

import cart from './cart.svg'

const Cart = () => {
    const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart)

    return (
        <Button className="btn--cart cart-button">
            {Object.keys(items).length ? (
                <>
                    <span className="cart-button__sum">{totalPrice} ₽</span>
                    <span className="cart-button__separator"></span>
                    <span className="cart-button__counter">
                        <img
                            className="cart-button__image"
                            src={cart}
                            alt="shopping cart"
                        />
                        {totalCount}
                    </span>
                </>
            ) : (
                'Корзина'
            )}
        </Button>
    )
}

export default Cart
