import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Nav from '../components/Nav/Nav'
import NavSorting from '../components/NavSorting/NavSorting'

import { fetchPizzas } from '../redux/actions/pizzas'
import { setCategory, setSortBy } from '../redux/actions/filters'
import { addPizzaToCart } from '../redux/actions/cart'

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

const sortItems = [
    { name: 'популярности', type: 'popularity', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавиту', type: 'title', order: 'asc' },
]

const Home = () => {
    const dispatch = useDispatch()

    const items = useSelector(({ pizzas }) => pizzas.items)
    const cartItems = useSelector(({ cart }) => cart.items)
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
    const { category, sortBy } = useSelector(({ filters }) => filters)

    // console.log(cartItems)
    // console.log(Object.keys(cartItems))
    // Object.keys(cartItems).map((item) => console.log(item[0]))

    useEffect(() => {
        dispatch(fetchPizzas(category, sortBy))
    }, [category, sortBy])

    const onSelectNavItem = (index) => {
        dispatch(setCategory(index))
    }

    const onSelectSortingItem = (type) => {
        dispatch(setSortBy(type))
    }

    const handleAddPizzaToCart = (obj) => {
        dispatch(addPizzaToCart(obj))
    }

    return (
        <>
            <div className="content__top">
                <Nav
                    activeNavItem={category}
                    onClickItem={onSelectNavItem}
                    items={navItemsNames}
                />

                <NavSorting
                    activeSortingItem={sortBy.type}
                    items={sortItems}
                    onClickSortItem={onSelectSortingItem}
                />
            </div>
            <div className="content__main">
                <section className="section">
                    <h2 className="section__title">Все пиццы</h2>
                    {items.length ? (
                        ''
                    ) : (
                        <p className="pizzas-unavailable">
                            Извините, сейчас пиццы недоступны для заказа
                        </p>
                    )}
                    <div className="section__list">
                        {isLoaded
                            ? items.map((obj, index) => {
                                  //   Object.keys(cartItems)
                                  //       ? Object.entries(cartItems).map(
                                  //             ([key, value]) => {
                                  //                 let sum
                                  //                 if (Number(key[0]) === index) {
                                  //                     sum+= value.items.length
                                  //                 }
                                  //                 return sum
                                  //             },
                                  //         )
                                  //       :
                                  //          console.log(

                                  //                 Object.keys(cartItems).filter(
                                  //                     (item) =>
                                  //                         Number(item[0]) === index,
                                  //                 ),
                                  //             )
                                  //         Object.keys(cartItems).forEach(
                                  //             (item) => {
                                  //                 if (item[0] == index) {
                                  //                     return console.log(item[0])
                                  //                 }
                                  //             },
                                  //         )
                                  //         console.log()
                                  return (
                                      <PizzaBlock
                                          onClickAddPizza={handleAddPizzaToCart}
                                          key={obj.id}
                                          {...obj}
                                          addedCount={
                                              Object.keys(cartItems).filter(
                                                  (item) =>
                                                      Number(item[0]) ===
                                                      obj.id,
                                              ).length &&
                                              Object.entries(cartItems)
                                                  .map(([key, value]) => {
                                                      if (
                                                          Number(key[0]) ===
                                                          obj.id
                                                      ) {
                                                          return value.items
                                                              .length
                                                      }
                                                      return 0
                                                  })
                                                  .reduce(
                                                      (sum, value) =>
                                                          sum + value,
                                                      0,
                                                  )
                                          }
                                      />
                                  )
                              })
                            : Array(8)
                                  .fill(0)
                                  .map((_, index) => (
                                      <PizzaLoadingBlock key={index} />
                                  ))}
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home
