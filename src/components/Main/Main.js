import React from 'react'

import './Main.scss'

import Home from '../../pages/Home'
import Cart from '../../pages/Cart'
import { Route } from 'react-router'

const Main = () => {
    return (
        <main className="main">
            <Route path="/" component={Home} exact />
            <Route path="/cart" component={Cart} exact />
        </main>
    )
}

export default Main
