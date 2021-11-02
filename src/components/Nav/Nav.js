import React from 'react'

import './Nav.scss'

import NavSorting from '../NavSorting/NavSorting'
import Button from '../Button/Button'

const Nav = ({ activeNavItem, items, onClickItem }) => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                {items &&
                    items.map((item, index) => (
                        <li className="nav__item" key={item + index}>
                            <Button
                                className={
                                    activeNavItem === index
                                        ? 'btn--nav active'
                                        : 'btn--nav'
                                }
                                onClick={() => onClickItem(index)}
                            >
                                {item}
                            </Button>
                        </li>
                    ))}
            </ul>
            <NavSorting
                items={[
                    { name: 'популярности', type: 'popularity' },
                    { name: 'цене', type: 'price' },
                    { name: 'алфавиту', type: 'alphabet' },
                ]}
            />
        </nav>
    )
}

export default Nav
