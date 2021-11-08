import React from 'react'

import Button from '../Button/Button'

import './CartItem.scss'

const CartItem = ({
    id,
    image,
    title,
    type,
    size,
    totalPrice,
    totalCount,
    onRemove,
    onPlus,
    onMinus,
}) => {
    const handleRemoveClick = () => {
        onRemove(id)
    }
    const handlePlusItem = () => {
        onPlus(id)
    }

    const handleMinusItem = () => {
        onMinus(id)
    }
    return (
        <li className="cart-item">
            <div className="cart-item__about">
                <img className="cart-item__image" src={image} alt={title} />
                <div className="cart-item__about-text">
                    <h2 className="cart-item__title">{title}</h2>
                    <p className="cart-item__subtitle">
                        {type} тесто, {size}см.
                    </p>
                </div>
            </div>
            <div className="cart-item__amount">
                <Button className="btn--operator" onClick={handleMinusItem}>
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
                <span className="cart-item__count">{totalCount}</span>
                <Button className="btn--operator" onClick={handlePlusItem}>
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
            <div className="cart-item__price">{totalPrice}</div>
            <Button
                className="btn--operator delete"
                onClick={handleRemoveClick}
            >
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
