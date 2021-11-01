import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Nav from '../components/Nav/Nav'

import { fetchPizzas, setPizzas } from '../redux/actions/pizzas'
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

    useEffect(() => {
        dispatch(fetchPizzas())
    }, [])

    const items = useSelector(({ pizzas }) => pizzas.items)

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
