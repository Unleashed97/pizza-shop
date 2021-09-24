import React from 'react'

import './Section.scss'

import Product from '../Product/Product'

import asianShrimpPizza from '../../assets/images/asianShrimp.jpg'
import cheeseBurgerPizza from '../../assets/images/cheeseBurger.jpg'
import cheeseChikenPizza from '../../assets/images/cheeseeChiken.jpg'
import cheesyPizza from '../../assets/images/cheesy.jpg'
import margaritaPizza from '../../assets/images/margarita.jpg'
import barbecueSausagesPizza from '../../assets/images/barbecueSausages.jpg'
import hamMushroomsPizza from '../../assets/images/hamMushrooms.jpg'
import pepperoniPizza from '../../assets/images/pepperoni.jpg'

const Section = () => {
    const productList = [
        {
            image: cheeseBurgerPizza,
            title: 'Чизбургер-пицца',
            price: 'от 395₽',
            description:
                'Мясной соус болоньезе, соус бургер, соленые огурчики, томаты, красный лук, моцарелла',
        },
        {
            image: cheesyPizza,
            title: 'Сырная',
            price: 'от 450 ₽',
            description: 'Моцарелла, сыры чеддер и пармезан, соус альфредо',
        },
        {
            image: asianShrimpPizza,
            title: 'Креветки по азиатски',
            price: 'от 290 ₽',
            description:
                'Креветки, шампиньоны, моцарелла и черный кунжут под кисло-сладким соусом ',
        },
        {
            image: cheeseChikenPizza,
            title: 'Сырный ципленок',
            price: 'от 385 ₽',
            description:
                'Цыпленок, моцарелла, смесь сыров чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок',
        },
        {
            image: margaritaPizza,
            title: 'Маргарита',
            price: 'от 349 ₽',
            description:
                'Увеличенная порция моцареллы, томаты, итальянские травы, томатный соус',
        },
        {
            image: barbecueSausagesPizza,
            title: 'Колбаски барбекю',
            price: 'от 399 ₽',
            description:
                'Острая чоризо, соус барбекю, томаты, красный лук, моцарелла, томатный соус',
        },
        {
            image: hamMushroomsPizza,
            title: 'Ветчина и грибы',
            price: 'от 349 ₽',
            description:
                'Ветчина, шампиньоны, увеличенная порция моцареллы, томатный соус',
        },
        {
            image: pepperoniPizza,
            title: 'Пепперони',
            price: 'от 399 ₽',
            description:
                'Пикантная пепперони, увеличенная порция моцареллы, томатный соус',
        },
    ]
    return (
        <section className="section">
            <h2 className="section__title">Все пиццы</h2>
            <div className="section__list">
                {productList.map((item, index) => (
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
    )
}

export default Section
