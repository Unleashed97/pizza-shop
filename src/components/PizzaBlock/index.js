import React, { useState } from 'react'
import classNames from 'classnames'

import './pizzaBlock.scss'

import Button from '../Button/Button'

const PizzaBlock = (props) => {
    let [counterOfPizzas, setCounterOfPizzas] = useState(0)

    let [activeDoughButton, setActiveDoughButton] = useState(0)

    let [activeSizeButton, setActiveSizeButton] = useState(0)

    let doughButtonsList = ['тонкое', 'традиционное']

    let sizeButtonsList = ['26см.', '30см.', '40см.']

    let pizzaCounterClasses = classNames('pizza-block__counter', {
        'pizza-block__counter--show': counterOfPizzas,
    })

    const pizzaAddHandler = () => {
        setCounterOfPizzas(++counterOfPizzas)
    }

    const doughButtonClickHandler = (event, indexOfButton) => {
        setActiveDoughButton(indexOfButton)
    }

    const sizeButtonClickHandler = (event, indexOfButton) => {
        setActiveSizeButton(indexOfButton)
    }

    return (
        <div className="pizza-block">
            <img
                src={props.image}
                alt={props.title}
                className="pizza-block__image"
            />
            <h3 className="pizza-block__title">{props.title}</h3>
            <p className="pizza-block__description">{props.description}</p>
            <div className="pizza-block__params">
                <div className="pizza-block__params-dough">
                    {doughButtonsList.map((item, index) => (
                        <Button
                            className={
                                index === activeDoughButton
                                    ? 'btn--params active'
                                    : 'btn--params'
                            }
                            onClick={(e) => doughButtonClickHandler(e, index)}
                            key={item + index}
                        >
                            {item}
                        </Button>
                    ))}
                </div>
                <div className="pizza-block__params-size">
                    {sizeButtonsList.map((item, index) => (
                        <Button
                            className={
                                index === activeSizeButton
                                    ? 'btn--params active'
                                    : 'btn--params'
                            }
                            onClick={(e) => {
                                sizeButtonClickHandler(e, index)
                            }}
                            key={item + index}
                        >
                            {item}
                        </Button>
                    ))}
                </div>
            </div>
            <footer className="pizza-block__footer">
                <span className="pizza-block__price">{props.price}</span>
                <Button className="btn--add-to-cart" onClick={pizzaAddHandler}>
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
                    <span className={pizzaCounterClasses}>
                        {counterOfPizzas}
                    </span>
                </Button>
            </footer>
        </div>
    )
}

export default PizzaBlock
