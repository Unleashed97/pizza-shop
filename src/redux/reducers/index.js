import { combineReducers } from 'redux'

import filtersReducer from './filters'
import productReducer from './product'
import cartReducer from './cart'

const rootReducer = combineReducers({
    filters: filtersReducer,
    products: productReducer,
    cart: cartReducer,
})

export default rootReducer
