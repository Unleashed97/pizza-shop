import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../Button/Button'
import CartItem from '../CartItem/CartItem'

import CartContent from './cart-content.svg'
import CartIcon from './cart-icon.svg'
import trashIcon from './trash-icon.svg'

import './Cart.scss'

const Cart = (cartItems) => {
    return (
        <>
            {cartItems ? (
                // <div className="cart cart--empty">
                //     <div className="cart__header">
                //         <h1 className="cart__title">Корзина пустая</h1>
                //         <span className="cart__emoji">&#x1F615;</span>
                //     </div>
                //     <p className="cart__sub-title">
                //         Вероятней всего, вы не заказывали ещё пиццу. Для того,
                //         чтобы заказать пиццу, перейди на главную страницу.
                //     </p>

                //     <img className="cart__image" src={CartContent} alt="" />

                //     <Link to="/">
                //         <Button className="btn--back">Вернуться назад</Button>
                //     </Link>
                // </div>
                <div className="cart">
                    <header className="cart__header">
                        <h1 className="cart__title">
                            <img src={CartIcon} alt="" className="cart__icon" />
                            Корзина
                        </h1>

                        <Button className="btn--empty-trash">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    className="empty-trash-icon"
                                    stroke="#b6b6b6"
                                    d="M 11.6666,9.16667 V 14.1667 M 8.33337,9.16667 V 14.1667 M 6.66663,5.00001 V 3.33334 c 0,-0.44203 0.17559,-0.86595 0.48815,-1.17851 C 7.46734,1.84227 7.89127,1.66667 8.33329,1.66667 h 3.33331 c 0.4421,0 0.866,0.1756 1.1785,0.48816 0.3126,0.31256 0.4882,0.73648 0.4882,1.17851 v 1.66667 m 2.5,0 V 16.6667 c 0,0.442 -0.1756,0.8659 -0.4882,1.1785 -0.3125,0.3125 -0.7364,0.4881 -1.1785,0.4881 H 5.83329 c -0.44202,0 -0.86595,-0.1756 -1.17851,-0.4881 C 4.34222,17.5326 4.16663,17.1087 4.16663,16.6667 V 5.00001 Z M 2.5,5 H 4.16667 17.5"
                                />
                            </svg>

                            <p className="empty-trash-text">Очистить корзину</p>
                        </Button>
                    </header>
                    <div className="cart__body">
                        <ul className="cart__list">
                            <CartItem />
                            <CartItem />
                        </ul>
                    </div>
                    <footer className="cart__footer">
                        <div className="cart__footer-total">
                            <p className="cart__footer-total-amount">
                                Всего пицц: <b>3 шт.</b>
                            </p>

                            <p className="cart__footer-total-price">
                                Сумма заказа:{' '}
                                <mark className="mark mark--color-orange">
                                    900 ₽
                                </mark>
                            </p>
                        </div>
                        <div className="cart__footer-btns">
                            <Button className="btn--big-outline">
                                <svg
                                    xlmns="https://www.w3.org/2000/svg"
                                    width="10"
                                    height="12"
                                    fill="none"
                                >
                                    <path
                                        stroke="#D3D3D3"
                                        stroke-width="2"
                                        className="btn__icon"
                                        d="M6,0 L1,6 L 6,12"
                                    />
                                </svg>
                                Вернуться назад
                            </Button>

                            <Button className="btn--big btn--filled btn--orange">
                                Оплатить сейчас
                            </Button>
                        </div>
                    </footer>
                </div>
            ) : (
                <div className="cart">
                    <img src={trashIcon} alt="" className="cart__icon" />
                    <h1 className="cart__empty-trash">Очистить корзину</h1>
                </div>
            )}
        </>
    )
}

export default Cart
