import React from 'react'
import PropTypes from 'prop-types'
import { Field, Form } from 'redux-form'
import cn from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'

import InputField from '../../../App/components/InputField'

import styles from './styles'

const Login = ({ classes, onSubmit, isError, handleChangeAuthType }) => (
  <Form className={classes.root} onSubmit={onSubmit}>
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

    {isError && <div className={classes.error}>Email или пароль неверный.</div>}

    <button
      type="submit"
      className={cn(classes.submit, {
        disabled: false
      })}
    >
      Авторизироваться
    </button>

    <button
      className={classes.changeAuth}
      onClick={() => handleChangeAuthType()}
    >
      Зарегистрироваться
    </button>
  </Form>
)

Login.propTypes = {
  classes: PropTypes.object,
  onSubmit: PropTypes.func,
  handleChangeAuthType: PropTypes.func,
  isError: PropTypes.bool
}

export default withStyles(styles)(Login)
