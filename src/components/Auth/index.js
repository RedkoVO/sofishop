import React from 'react'
import PropTypes from 'prop-types'
import { Field, Form } from 'redux-form'
import cn from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'

import InputField from '../App/components/InputField'

import styles from './styles'

const AuthModal = ({ classes, onSubmit, handleCloseAuth, isError }) => (
  <div className={classes.root}>
    <div className={classes.overlay} onClick={() => handleCloseAuth()} />
    <Form className={classes.form} onSubmit={onSubmit}>
      <div className={classes.title}>Авторизация</div>
      <Field
        id="emailLogin"
        name="email"
        type="text"
        className={classes.field}
        component={InputField}
        placeholder="Email"
      />
      <Field
        id="passLogin"
        name="password"
        type="password"
        className={classes.field}
        component={InputField}
        placeholder="Пароль"
      />

      {isError && (
        <div className={classes.error}>Email или пароль неверный.</div>
      )}

      <button
        type="submit"
        className={cn(classes.submit, {
          disabled: false
        })}
      >
        Авторизироваться
      </button>
    </Form>
  </div>
)

AuthModal.propTypes = {
  classes: PropTypes.object,
  onSubmit: PropTypes.func,
  isError: PropTypes.bool,
  handleCloseAuth: PropTypes.func
}

export default withStyles(styles)(AuthModal)
