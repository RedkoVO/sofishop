import axios from 'axios'
import qs from 'qs'

import {
  LOAD_CART,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  CHECKOUT_ADD,
  REMOVE_ALL_PRODUCTS
} from './types'

export const loadCart = products => ({
  type: LOAD_CART,
  payload: products
})

export const addProduct = product => ({
  type: ADD_PRODUCT,
  payload: product
})

export const removeProduct = product => ({
  type: REMOVE_PRODUCT,
  payload: product
})

export const removeAllProducts = () => ({
  type: REMOVE_ALL_PRODUCTS
})

/* CHECKOUT ADD */
export const checkoutAdd = data => dispatch =>
  axios({
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(data),
    url: `${'http://52.42.248.133/'}/api/checkout/add`
  })
    .then(response => {
      dispatch(createCheckoutAddSuccess(response.data))

      return response.data
    })
    .catch(error => {
      console.log('CHECKOUT_ADD error', error)
    })

export const createCheckoutAddSuccess = data => {
  return {
    type: CHECKOUT_ADD,
    payload: {
      success: data.success
    }
  }
}
/* ********** */
