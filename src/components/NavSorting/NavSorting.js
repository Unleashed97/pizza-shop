import React, { useState } from 'react'
import classNames from 'classnames'

import './NavSorting.scss'

import Button from '../Button/Button'

const NavSorting = () => {
    let [popupState, setPopupState] = useState(false)

    let [sortingSelect, setSortingSelect] = useState('популярности')

    let popupTriangleClasses = classNames('nav-sorting__popup-triangle', {
        'nav-sorting__popup-triangle--opened': popupState,
    })

    let popupListClasses = classNames('nav-sorting__popup-list', {
        'nav-sorting__popup-list--opened': popupState,
    })

    const buttonSelectSortingHandler = (event) => {
        setPopupState(!popupState)
        setSortingSelect(event.target.innerHTML)
    }
    return (
        <div className="nav-sorting">
            <svg
                className={popupTriangleClasses}
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                    fill="#2C2C2C"
                />
            </svg>
            <p>Сортировка по: &nbsp;</p>
            <div className="nav-sorting__popup">
                {/* <Button
                    className="btn--sorting"
                    sortingSelectClick={buttonSelectSortingHandler}
                >
                    популярности
                </Button> */}
                <button
                    className="nav-sorting__btn"
                    onClick={(e) => buttonSelectSortingHandler(e)}
                >
                    {sortingSelect}
                </button>
                <ul className={popupListClasses}>
                    <li className="nav-sorting__popup-list-item">
                        {/* <Button className="btn--sorting-list-btn">
                            популярности
                        </Button> */}
                        <button
                            className="nav-sorting__popup-list-btn"
                            onClick={(e) => buttonSelectSortingHandler(e)}
                        >
                            по популярности
                        </button>
                    </li>
                    <li className="nav-sorting__popup-list-item">
                        {/* <Button className="btn--sorting-list-btn">
                            по цене
                        </Button> */}
                        <button
                            className="nav-sorting__popup-list-btn"
                            onClick={(e) => buttonSelectSortingHandler(e)}
                        >
                            по цене
                        </button>
                    </li>
                    <li className="nav-sorting__popup-list-item">
                        {/* <Button className="btn--sorting-list-btn">
                            по алфавиту
                        </Button> */}
                        <button
                            className="nav-sorting__popup-list-btn"
                            onClick={(e) => buttonSelectSortingHandler(e)}
                        >
                            по алфавиту
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavSorting
