import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Button from '../components/Button/Button'
import CartItem from '../components/CartItem/CartItem'

import {
    clearCart,
    removeCartItem,
    plusCartItem,
    minusCartItem,
} from '../redux/actions/cart'

import shoppingCart from '../assets/images/shoppingCart.jpg'
import '../scss/style.scss'

const Cart = () => {
    const dispatch = useDispatch()
    const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart)

    const addedPizzas = Object.keys(items).map((key) => {
        return items[key].items[0]
    })
    // const allCartItems = [].concat.apply([], Object.values(items))

    const onClearCart = () => {
        if (window.confirm('Вы действительно хотите очистить корзину?'))
            dispatch(clearCart())
    }

    const onRemoveItem = (id) => {
        if (window.confirm('Вы действительно хотитет удалить?'))
            dispatch(removeCartItem(id))
    }

    const onPlusItem = (id) => {
        dispatch(plusCartItem(id))
    }

    const onMinusItem = (id) => {
        dispatch(minusCartItem(id))
    }
    return (
        <>
            {totalCount ? (
                <div className="cart">
                    <header className="cart__header">
                        <h1 className="cart__title">
                            <svg
                                className="cart__icon"
                                width="31"
                                height="31"
                                viewBox="0 0 31 31"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.6667 28.7917C12.0014 28.7917 13.0833 27.7097 13.0833 26.375C13.0833 25.0403 12.0014 23.9583 10.6667 23.9583C9.33198 23.9583 8.25 25.0403 8.25 26.375C8.25 27.7097 9.33198 28.7917 10.6667 28.7917Z"
                                    stroke="#3F3F3F"
                                    strokeWidth="2.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M25.1667 28.7917C26.5014 28.7917 27.5833 27.7097 27.5833 26.375C27.5833 25.0403 26.5014 23.9583 25.1667 23.9583C23.832 23.9583 22.75 25.0403 22.75 26.375C22.75 27.7097 23.832 28.7917 25.1667 28.7917Z"
                                    stroke="#3F3F3F"
                                    strokeWidth="2.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M7.85117 8.24999H28.7916L26.7616 18.3879C26.6511 18.9442 26.3484 19.4439 25.9066 19.7996C25.4648 20.1553 24.912 20.3442 24.3449 20.3333H11.5728C10.9828 20.3383 10.4113 20.1273 9.96612 19.74C9.52095 19.3527 9.23286 18.8159 9.15617 18.2308L7.3195 4.31083C7.24334 3.72991 6.95872 3.19643 6.51862 2.80968C6.07852 2.42292 5.5129 2.20922 4.927 2.20833H2.20825"
                                    stroke="#3F3F3F"
                                    strokeWidth="2.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
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

                            <p
                                className="empty-trash-text"
                                onClick={onClearCart}
                            >
                                Очистить корзину
                            </p>
                        </Button>
                    </header>
                    <div className="cart__body">
                        <ul className="cart__list">
                            {addedPizzas.map((obj, index) => (
                                <CartItem
                                    id={Object.keys(items)[index]}
                                    image={obj.image}
                                    title={obj.title}
                                    type={obj.type}
                                    size={obj.size}
                                    groupPrice={
                                        items[Object.keys(items)[index]]
                                            .groupPrice
                                    }
                                    groupCount={
                                        items[Object.keys(items)[index]]
                                            .groupCount
                                    }
                                    onRemove={onRemoveItem}
                                    onPlus={onPlusItem}
                                    onMinus={onMinusItem}
                                    key={index}
                                />
                            ))}
                        </ul>
                    </div>
                    <footer className="cart__footer">
                        <div className="cart__footer-total">
                            <p className="cart__footer-total-amount">
                                Всего пицц: <b>{totalCount} шт.</b>
                            </p>

                            <p className="cart__footer-total-price">
                                Сумма заказа:
                                <mark className="mark mark--color-orange">
                                    &nbsp; {totalPrice} ₽
                                </mark>
                            </p>
                        </div>
                        <div className="cart__footer-btns">
                            <Link to="/">
                                <Button className="btn--back-outline">
                                    <svg
                                        xlmns="https://www.w3.org/2000/svg"
                                        width="10"
                                        height="12"
                                        fill="none"
                                    >
                                        <path
                                            stroke="#D3D3D3"
                                            strokeWidth="2"
                                            className="btn__icon"
                                            d="M6,0 L1,6 L 6,12"
                                        />
                                    </svg>
                                    Вернуться назад
                                </Button>
                            </Link>
                            <Button className="btn--pay">
                                Оплатить сейчас
                            </Button>
                        </div>
                    </footer>
                </div>
            ) : (
                <div className="cart cart--empty">
                    <div className="cart__header">
                        <h1 className="cart__title">Корзина пустая</h1>
                        <span className="cart__emoji">&#x1F615;</span>
                    </div>
                    <p className="cart__sub-title">
                        Вероятней всего, вы еще не выбрали пиццу. Для того,
                        чтобы выбрать пиццу, перейди на главную страницу.
                    </p>

                    <img className="cart__image" src={shoppingCart} alt="" />

                    <Link to="/">
                        <Button className="btn--back-filled">
                            Вернуться назад
                        </Button>
                    </Link>
                </div>
            )}
        </>
    )
}

export default Cart
