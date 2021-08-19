import React from 'react'

import './Section.scss'

import Product from '../Product/Product'

const Section = () => {
    return (
        <section className="section">
            <h2 className="section__title">Все пиццы</h2>
            <div className="section__list">
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </section>
    )
}

export default Section
