import {
  LOAD_CART,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  REMOVE_ALL_PRODUCTS,
  CHECKOUT_ADD
} from '../actions/types'

const initialState = {
  products: []
}

const cart = (state = initialState, action) => {
  const { payload, type } = action

  switch (type) {
    case LOAD_CART:
      return {
        ...state,
        products: payload
      }
    case ADD_PRODUCT:
      return {
        ...state,
        productToAdd: Object.assign({}, payload)
      }
    case REMOVE_PRODUCT:
      return {
        ...state,
        productToRemove: Object.assign({}, payload)
      }

    case REMOVE_ALL_PRODUCTS:
      localStorage.removeItem('state')

      return {
        ...state,
        products: []
      }

    case CHECKOUT_ADD:
      return {
        ...state,
        checkoutAdd: {
          paymentUrl: payload.paymentUrl,
          success: payload.success
        }
      }

    default:
      return state
  }
}

export default cart
