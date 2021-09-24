import React from 'react'
import classNames from 'classnames'

import './Button.scss'

const Button = ({ className, children }) => {
    return (
        <button className={classNames('btn', className, {})}>{children}</button>
    )
}

export default Button
