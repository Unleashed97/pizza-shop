import React, { useState } from 'react'
import classNames from 'classnames'

import './pizzaBlock.scss'

import Button from '../Button/Button'

const PizzaBlock = ({
    id,
    title,
    image,
    description,
    price,
    types,
    sizes,
    onClickAddPizza,
    addedCount,
}) => {
    let availableTypes = ['тонкое', 'традиционное']

    let availableSizes = [26, 30, 40]

    const [activeType, setActiveType] = useState(types[0])
    const [activeSize, setActiveSize] = useState(sizes[0])

    const onSelectType = (index) => {
        setActiveType(index)
    }

    const onSelectSize = (size) => {
        setActiveSize(size)
    }

    const onAddPizzaHandle = () => {
        const obj = {
            id,
            title,
            image,
            price,
            type: availableTypes[activeType],
            size: activeSize,
        }
        onClickAddPizza(obj)
    }

    return (
        <div className="pizza-block">
            <img src={image} alt={title} className="pizza-block__image" />
            <h3 className="pizza-block__title">{title}</h3>
            <p className="pizza-block__description">{description}</p>
            <div className="pizza-block__params">
                <div className="pizza-block__params-dough">
                    {availableTypes.map((type, index) => (
                        <Button
                            className={classNames('btn--params', {
                                active: activeType === index,
                                disabled: !types.includes(index),
                            })}
                            onClick={() => onSelectType(index)}
                            key={type + index}
                        >
                            {type}
                        </Button>
                    ))}
                </div>
                <div className="pizza-block__params-size">
                    {availableSizes.map((size, index) => (
                        <Button
                            className={classNames('btn--params', {
                                active: activeSize === size,
                                disabled: !sizes.includes(size),
                            })}
                            onClick={() => onSelectSize(size)}
                            key={size + index}
                        >
                            {size} см.
                        </Button>
                    ))}
                </div>
            </div>
            <footer className="pizza-block__footer">
                <span className="pizza-block__price">от {price} ₽</span>
                <Button className="btn--add-to-cart" onClick={onAddPizzaHandle}>
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
                    <span
                        className={classNames('pizza-block__counter', {
                            show: addedCount,
                        })}
                    >
                        {addedCount}
                    </span>
                </Button>
            </footer>
        </div>
    )
}

export default PizzaBlock
