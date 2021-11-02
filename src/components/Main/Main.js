import React from 'react'

import './Main.scss'

import Home from '../../pages/Home'
import Cart from '../../pages/Cart'
import { Route } from 'react-router'

const Main = () => {
    return (
        <div className="content">
            <Route path="/" component={Home} exact />
            <Route path="/cart" component={Cart} exact />
        </div>
    )
}

export default Main
