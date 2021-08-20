import React from 'react'

import './Product.scss'

const Product = (props) => {
    return (
        <div className="product">
            <img
                src="https://place-hold.it/260"
                alt=""
                className="product__image"
            />
            <h3 className="product__title">{props.title}</h3>
            <div className="product__params">
                <div className="product__params-dough">
                    <button className="product__params-btn product__params-btn--active">
                        Тонкое
                    </button>
                    <button className="product__params-btn">
                        Традиционное
                    </button>
                </div>
                <div className="product__params-size">
                    <button className="product__params-btn product__params-btn--active">
                        26 см.
                    </button>
                    <button className="product__params-btn">30 см.</button>
                    <button className="product__params-btn">40 см.</button>
                </div>
            </div>
            <footer className="product__footer">
                <span className="product__price">{props.price}</span>
                <button className="product__add-btn">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            className="plus-icon"
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        />
                    </svg>
                    <p>Добавить</p>
                    <span className="product__counter"></span>
                </button>
            </footer>
        </div>
    )
}

export default Product
