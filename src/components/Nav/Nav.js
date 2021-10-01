import React, { useState } from 'react'

import './Nav.scss'

import NavSorting from '../NavSorting/NavSorting'
import Button from '../Button/Button'

const Nav = ({ items }) => {
    const [selectedCategory, setSelectedCategory] = useState(0)

    const navButtonClickHandler = (index) => {
        setSelectedCategory(index)
    }

    return (
        <nav className="nav">
            <ul className="nav__list">
                {items &&
                    items.map((item, index) => (
                        <li className="nav__item" key={item + index}>
                            <Button
                                className={
                                    selectedCategory === index
                                        ? 'btn--nav active'
                                        : 'btn--nav'
                                }
                                onClick={() => navButtonClickHandler(index)}
                            >
                                {item}
                            </Button>
                        </li>
                    ))}
            </ul>
            <NavSorting />
        </nav>
    )
}

export default Nav
