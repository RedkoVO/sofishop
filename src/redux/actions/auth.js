import axios from 'axios'
import qs from 'qs'

import { CHECK_AUTH, LOGOUT } from './types'

import gC from '../../constants'

/* CHECK AUTH */
export const checkAuth = () => async dispatch => {
  const token = localStorage.getItem('token')

  try {
    const response = await axios({
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        token: token ? token : ''
      },
      url: `${gC.API_URL}/api/auth/check`
    })
    dispatch(createCheckAuthSuccess(response.data))
    return response.data
  } catch (error) {
    console.log('CHECK_AUTH error', error)
  }
}

export const createCheckAuthSuccess = data => {
  return {
    type: CHECK_AUTH,
    payload: {
      success: data.success,
      email: data.email
    }
  }
}
/* ********** */

/* LOGIN USER */
export const loginUser = data => () =>
  axios({
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(data),
    url: `${gC.API_URL}/api/auth/login`
  })
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log('LOGIN_USER error', error)
    })
/* ********** */

/* REGISTRATION USER */
export const registrationUser = data => async () => {
  const dataBody = {
    email: data.emailRegister,
    password: data.passwordRegister
  }

  try {
    const response = await axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(dataBody),
      url: `${gC.API_URL}/api/auth/register`
    })
    return response.data
  } catch (error) {
    console.log('REGISTRATION_USER error', error)
  }
}
/* ********** */

/* LOGOUT */
export const logout = () => dispatch =>
  axios({
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    url: `${gC.API_URL}/api/auth/logout`
  })
    .then(response => {
      dispatch(createLogoutSuccess(response.data))

      return response.data
    })
    .catch(error => {
      console.log('LOGOUT error', error)
    })

export const createLogoutSuccess = data => {
  return {
    type: LOGOUT,
    payload: {
      success: data.success
    }
  }
}
/* ********** */
