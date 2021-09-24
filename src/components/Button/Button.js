import React from 'react'
import classNames from 'classnames'

import './Button.scss'

const Button = ({ className, children, onClick }) => {
    return (
        <button className={classNames('btn', className, {})} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
