import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withHandlers, pure, withState } from 'recompose'
import { reduxForm } from 'redux-form'

import Auth from '../../components/Auth'

import {
  loginUser,
  registrationUser,
  checkAuth
} from '../../redux/actions/auth'

import validate from './validate'

const FORM_NAME = 'authirization'

export default compose(
  connect(),
  reduxForm({
    form: FORM_NAME,
    validate
  }),
  withState('isError', 'setError', false),
  withState('isErrorRegister', 'setErrorRegister', false),
  withState('isLogin', 'setIsLogin', true),
  withState('recaptcha', 'setRecaptcha', ''),
  withState('recaptchaError', 'setRecaptchaError', ''),
  withState('isShowSuccessRegistration', 'setShowSuccessRegistration', false),
  withHandlers({
    handleChangeAuthType: ({ isLogin, setIsLogin }) => () => {
      setIsLogin(!isLogin)
    },

    handleChangeRecaptcha: ({ setRecaptcha, setRecaptchaError }) => hash => {
      setRecaptcha(hash)
      setRecaptchaError('')
    },

    onSubmitLogin: ({ dispatch, handleSubmit, handleCloseAuth, setError }) =>
      handleSubmit(variables => {
        dispatch(loginUser(variables))
          .then(res => {
            if (res.success && res.token) {
              localStorage.setItem('token', res.token)

              dispatch(checkAuth())
                .then(res => {
                  if (res.success) {
                    handleCloseAuth()
                  }
                })
                .catch(err => {
                  console.log('Error check:', err)
                })
            }

            if (!res.success) {
              setError(true)
            }
          })
          .catch(err => {
            console.log('Error Login:', err)
          })
      }),

    onSubmitRegistration: ({
      dispatch,
      handleSubmit,
      // handleCloseAuth,
      setShowSuccessRegistration,
      setErrorRegister,
      setRecaptchaError,
      recaptcha
    }) =>
      handleSubmit(variables => {
        if (recaptcha) {
          const data = {
            email: variables.emailRegister,
            recaptcha
          }

          dispatch(registrationUser(data))
            .then(res => {
              // if (res.success && res.token) {
              //   localStorage.setItem('token', res.token)

              //   dispatch(checkAuth())
              //     .then(res => {
              //       if (res.success) {
              //         handleCloseAuth()
              //       }
              //     })
              //     .catch(err => {
              //       console.log('Error check:', err)
              //     })
              // }

              if (res.success) {
                setShowSuccessRegistration(true)
              }

              if (!res.success) {
                setErrorRegister(true)
              }
            })
            .catch(err => {
              console.log('Error Login:', err)
            })
        } else {
          setRecaptchaError('Заполните капчу')
        }
      })
  }),
  pure
)(Auth)
