import { combineReducers } from 'redux'

import filtersReducer from './filters'
import productReducer from './pizzas'
import cartReducer from './cart'

const rootReducer = combineReducers({
    filters: filtersReducer,
    pizzas: productReducer,
    cart: cartReducer,
})

export default rootReducer
