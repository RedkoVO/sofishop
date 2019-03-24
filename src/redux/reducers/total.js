import { UPDATE_CART, REMOVE_ALL_PRODUCTS } from '../actions/types'

const initialState = {
  data: {
    productQuantity: 0,
    installments: 0,
    totalPrice: 0,
    currencyId: 'USD',
    currencyFormat: '$'
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CART:
      return {
        ...state,
        data: action.payload
      }
    case REMOVE_ALL_PRODUCTS:
      return {
        ...state,
        data: {
          productQuantity: 0,
          installments: 0,
          totalPrice: 0,
          currencyId: 'USD',
          currencyFormat: '$'
        }
      }

    default:
      return state
  }
}
