import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'

import './NavSorting.scss'

import Button from '../Button/Button'

const NavSorting = ({ activeSortingItem, items, onClickSortItem }) => {
    let [popupState, setPopupState] = useState(false)

    let activeLabel = items.find((obj) => obj.type === activeSortingItem).name
    const navSortingRef = useRef()

    const handleOutsideClick = (e) => {
        let path = e.path || (e.composedPath && e.composedPath())
        if (!path.includes(navSortingRef.current)) {
            setPopupState(false)
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
    }, [])

    let popupTriangleClasses = classNames('nav-sorting__popup-triangle', {
        'nav-sorting__popup-triangle--opened': popupState,
    })

    let popupListClasses = classNames('nav-sorting__popup-list', {
        'nav-sorting__popup-list--opened': popupState,
    })

    const togglePopup = () => {
        setPopupState(!popupState)
    }
    const sortingButtonClickHandler = (index) => {
        setPopupState(!popupState)

        if (onClickSortItem) {
            onClickSortItem(index)
        }
    }
    return (
        <div ref={navSortingRef} className="nav-sorting">
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
                <Button className="btn--sorting" onClick={togglePopup}>
                    {activeLabel}
                </Button>
                <ul className={popupListClasses}>
                    {items &&
                        items.map((obj, index) => (
                            <li
                                className="nav-sorting__popup-list-item"
                                key={obj.name + index}
                            >
                                <Button
                                    className={
                                        activeSortingItem === obj.type
                                            ? 'btn--sorting-list-btn active'
                                            : 'btn--sorting-list-btn'
                                    }
                                    onClick={() =>
                                        sortingButtonClickHandler(obj)
                                    }
                                >
                                    {obj.name}
                                </Button>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    )
}

export default NavSorting
