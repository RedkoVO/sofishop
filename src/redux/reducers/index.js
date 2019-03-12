import { combineReducers } from 'redux'

import products from './products'
import cart from './cart'
import total from './total'

const appReducer = combineReducers({
  products,
  cart,
  total
})

export default (state, action) => appReducer(state, action)
