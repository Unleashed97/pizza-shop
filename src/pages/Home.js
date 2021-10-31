import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Nav from '../components/Nav/Nav'

import { pizzas } from '../database/db'

import { setProducts } from '../redux/actions/product'
import { setCategory } from '../redux/actions/filters'

import Product from '../components/Product/Product'

import '../scss/style.scss'

const navItemsNames = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
]

const Home = () => {
    const dispatch = useDispatch()

    const items = useSelector(({ products }) => products.items)

    useEffect(() => {
        dispatch(setProducts(pizzas))
    }, [dispatch])

    const onSelectNavItem = (index) => {
        dispatch(setCategory(index))
    }

    return (
        <>
            <Nav onClickItem={onSelectNavItem} items={navItemsNames} />
            <section className="section">
                <h2 className="section__title">Все пиццы</h2>
                <div className="section__list">
                    {items &&
                        items.map((item, index) => (
                            <Product
                                image={item.image}
                                title={item.title}
                                price={item.price}
                                description={item.description}
                                key={item + index}
                            />
                        ))}
                </div>
            </section>
        </>
    )
}

export default Home
