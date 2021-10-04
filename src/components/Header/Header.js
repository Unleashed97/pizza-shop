import React from 'react'
import { Route, Link } from 'react-router-dom'

import './Header.scss'

import Logo from '../Logo/Logo'
import Cart from '../Cart/Cart'

const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <Logo />
            </Link>

            <Route path="/" exact>
                <Link to="/cart">
                    <Cart />
                </Link>
            </Route>
        </header>
    )
}

export default Header
