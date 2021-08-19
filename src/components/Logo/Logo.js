import React from 'react'

import './Logo.scss'

import logo from './logo.png'

const Logo = () => {
    return (
        <div className="logo">
            <img className="logo__image" src={logo} alt="logotype Pizza shop" />
            <div className="logo__text">
                <h1 className="logo__brand">Pizza shop</h1>
                <p className="logo__slogan">Самая вкусная пицца во вселенной</p>
            </div>
        </div>
    )
}

export default Logo
