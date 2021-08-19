import React from 'react'

import './Nav.scss'

import NavSorting from '../NavSorting/NavSorting'

const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <button className="nav__item-btn">Все</button>
                </li>
                <li className="nav__item">
                    <button className="nav__item-btn">Мясные</button>
                </li>
                <li className="nav__item">
                    <button className="nav__item-btn">Вегетарианские</button>
                </li>
                <li className="nav__item">
                    <button className="nav__item-btn">Гриль</button>
                </li>
                <li className="nav__item">
                    <button className="nav__item-btn">Острые</button>
                </li>
                <li className="nav__item">
                    <button className="nav__item-btn">Закрытые</button>
                </li>
            </ul>
            <NavSorting />
        </nav>
    )
}

export default Nav
