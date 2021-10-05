import React from 'react'
import { Route, Link } from 'react-router-dom'

import './Header.scss'

import Logo from '../Logo/Logo'
import CartButton from '../CartButton/CartButton'

const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <Logo />
            </Link>

            <Route path="/" exact>
                <Link to="/cart">
                    <CartButton />
                </Link>
            </Route>
        </header>
    )
}

export default Header
