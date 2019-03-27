import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withHandlers, pure } from 'recompose'
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
  withHandlers({
    onSubmit: ({ dispatch, handleSubmit }) =>
      handleSubmit(variables => {
        console.log('variables', variables)

        dispatch(loginUser(variables))
          .then(res => {
            if (res.success && res.token) {
              localStorage.setItem('token', res.token)

              dispatch(checkAuth())
            }
          })
          .catch(err => {
            console.log('Error Login:', err)
          })
      })
  }),
  pure
)(Auth)
