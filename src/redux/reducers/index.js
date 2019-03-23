import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import products from './products'
import cart from './cart'
import total from './total'

const appReducer = combineReducers({
  form,
  products,
  cart,
  total
})

export default (state, action) => appReducer(state, action)
