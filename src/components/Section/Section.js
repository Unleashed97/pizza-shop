import React from 'react'

import './Section.scss'

import Product from '../Product/Product'

const Section = () => {
    return (
        <section className="section">
            <h2 className="section__title">Все пиццы</h2>
            <div className="section__list">
                <Product image title="Чизбургер-пицца" price="от 395 ₽" />
                <Product image title="Сырная" price="от 450 ₽" />
                <Product image title="Креветки по азиатски" price="от 290 ₽" />
                <Product image title="Сырный ципленок" price="от 385 ₽" />
            </div>
        </section>
    )
}

export default Section
