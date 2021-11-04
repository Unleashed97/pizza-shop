import React from 'react'

import Button from '../Button/Button'

import './CartItem.scss'

const CartItem = () => {
    return (
        <li className="cart-item">
            <div className="cart-item__about">
                <img
                    className="cart-item__img"
                    src="http://placehold.it/80"
                    alt=""
                />
                <div className="cart-item__about-text">
                    <h2 className="cart-item__title">Сырный ципленок</h2>
                    <p className="cart-item__subtitle">тонкое тесто, 26см</p>
                </div>
            </div>
            <div className="cart-item__amount">
                <Button className="btn--operator">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                    >
                        <path
                            className="btn--operator-icon"
                            strokeWidth="2"
                            d="M 10,16 L 20,16"
                        />
                    </svg>
                </Button>
                <span className="cart-item__count">2</span>
                <Button className="btn--operator">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                    >
                        <path
                            className="btn--operator-icon"
                            strokeWidth="2"
                            d="M 10,16 L 20,16 M15,11 L 15,21"
                        />
                    </svg>
                </Button>
            </div>
            <div className="cart-item__price">770 ₽</div>
            <Button className="btn--operator delete">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                    <path
                        className="btn--operator-icon"
                        strokeWidth="2"
                        d="M 10,16 L 20,16 M15,11 L 15,21"
                    />
                </svg>
            </Button>
        </li>
    )
}

export default CartItem
