import React from 'react'

import Nav from '../components/Nav/Nav'
import Section from '../components/Section/Section'

const Home = () => {
    return (
        <>
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
        </>
    )
}

export default Home
