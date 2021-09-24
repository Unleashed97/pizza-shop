import React from 'react'

import './Main.scss'

import Nav from '../Nav/Nav'
import Section from '../Section/Section'

const Main = () => {
    return (
        <main className="main">
            <Nav
                items={[
                    'Все',
                    'Мясные',
                    'Вегетарианская',
                    'Гриль',
                    'Острые',
                    'Закрытые',
                ]}
            />
            <Section />
        </main>
    )
}

export default Main
