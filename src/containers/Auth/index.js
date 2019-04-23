import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withHandlers, pure, withState } from 'recompose'
import { reduxForm } from 'redux-form'

import Auth from '../../components/Auth'

import { loginUser, checkAuth } from '../../redux/actions/auth'

import validate from './validate'

const FORM_NAME = 'authirization'

export default compose(
  connect(),
  reduxForm({
    form: FORM_NAME,
    validate
  }),
  withState('isError', 'setError', false),
  withHandlers({
    onSubmit: ({ dispatch, handleSubmit, handleCloseAuth, setError }) =>
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
      })
  }),
  pure
)(Auth)
