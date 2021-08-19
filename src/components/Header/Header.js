import React from 'react'

import './Header.scss'

import Logo from '../Logo/Logo'
import Cart from '../Cart/Cart'

const Header = () => {
    return (
        <header className="header">
            <Logo />
            <Cart />
        </header>
    )
}

export default Header
