const initialState = {
    items: [],
    totalPrice: 0,
    totalCount: 0,
}

const getGroupPrice = (arr) => arr.reduce((sum, obj) => sum + obj.price, 0)

const getTotalPrice = (obj) => {
    return Object.values(obj).reduce((sum, obj) => sum + obj.groupPrice, 0)
}

const getTotalCount = (obj) => {
    return Object.values(obj).reduce((sum, obj) => sum + obj.groupCount, 0)
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART': {
            const currentPizzaItems = !state.items[
                action.payload.id +
                    '_' +
                    action.payload.type +
                    action.payload.size
            ]
                ? [action.payload]
                : [
                      ...state.items[
                          action.payload.id +
                              '_' +
                              action.payload.type +
                              action.payload.size
                      ].items,
                      action.payload,
                  ]

            const newItems = {
                ...state.items,
                [action.payload.id +
                '_' +
                action.payload.type +
                action.payload.size]: {
                    items: currentPizzaItems,
                    groupCount: currentPizzaItems.length,
                    groupPrice: getGroupPrice(currentPizzaItems),
                },
            }

            const totalCount = getTotalCount(newItems)
            const totalPrice = getTotalPrice(newItems)

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            }
        }

        case 'REMOVE_CART_ITEM': {
            const newItems = {
                ...state.items,
            }
            const currentTotalPrice = newItems[action.payload].groupPrice
            const currentTotalCount = newItems[action.payload].items.length
            delete newItems[action.payload]
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
            }
        }

        case 'PLUS_CART_ITEM': {
            const newObjItems = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0],
            ]
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    groupCount: newObjItems.length,
                    groupPrice: getGroupPrice(newObjItems),
                },
            }

            const totalCount = getTotalCount(newItems)
            const totalPrice = getTotalPrice(newItems)

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            }
        }

        case 'MINUS_CART_ITEM': {
            const oldItems = state.items[action.payload].items
            const newObjItems =
                oldItems.length > 1
                    ? state.items[action.payload].items.slice(1)
                    : oldItems
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    groupCount: newObjItems.length,
                    groupPrice: getGroupPrice(newObjItems),
                },
            }

            const totalCount = getTotalCount(newItems)
            const totalPrice = getTotalPrice(newItems)

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            }
        }

        case 'CLEAR_CART':
            return { totalPrice: 0, totalCount: 0, items: {} }

        default:
            return state
    }
}

export default cart
