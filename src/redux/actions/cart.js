// export const setCartCount = (value) => ({
//     type: 'SET_CART_COUNT',
//     payload: value,
// })

// export const setCartTotal = (value) => ({
//     type: 'SET_CART_TOTAL',
//     payload: value,
// })

export const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj,
})
