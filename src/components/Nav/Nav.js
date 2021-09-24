import React from 'react'

import './Nav.scss'

import NavSorting from '../NavSorting/NavSorting'
import Button from '../Button/Button'

const Nav = ({ items }) => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                {items.map((item, index) => (
                    <li className="nav__item" key={index}>
                        <Button className="btn--nav">{item}</Button>
                    </li>
                ))}
            </ul>
            <NavSorting />
        </nav>
    )
}

export default Nav
