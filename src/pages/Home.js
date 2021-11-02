import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Nav from '../components/Nav/Nav'

import { fetchPizzas } from '../redux/actions/pizzas'
import { setCategory } from '../redux/actions/filters'

import PizzaBlock from '../components/PizzaBlock'
import PizzaLoadingBlock from '../components/PizzaBlock/LoadingBlock'

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

    const items = useSelector(({ pizzas }) => pizzas.items)
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
    const { category, sortBy } = useSelector(({ filters }) => filters)

    useEffect(() => {
        dispatch(fetchPizzas())
    }, [category])

    const onSelectNavItem = (index) => {
        dispatch(setCategory(index))
    }

    return (
        <>
            <Nav
                activeNavItem={category}
                onClickItem={onSelectNavItem}
                items={navItemsNames}
            />
            <section className="section">
                <h2 className="section__title">Все пиццы</h2>
                <div className="section__list">
                    {isLoaded
                        ? items.map((item, index) => (
                              <PizzaBlock
                                  image={item.image}
                                  title={item.title}
                                  price={item.price}
                                  description={item.description}
                                  key={item + index}
                              />
                          ))
                        : Array(8)
                              .fill(0)
                              .map((_, index) => (
                                  <PizzaLoadingBlock key={index} />
                              ))}
                </div>
            </section>
        </>
    )
}

export default Home
