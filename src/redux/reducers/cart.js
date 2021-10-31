const initialState = {
    counter: 0,
    total: 0,
}

const cart = (state = initialState, action) => {
    if (action.type === 'ADD_TO_CART') {
        return {
            ...state,
        }
    }
    return state
}

export default cart