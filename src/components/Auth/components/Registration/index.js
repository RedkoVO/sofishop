import React from 'react'
import PropTypes from 'prop-types'
import { Field, Form } from 'redux-form'
import cn from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'

import InputField from '../../../App/components/InputField'

import styles from './styles'

const Registration = ({
  classes,
  onSubmit,
  isErrorRegister,
  handleChangeAuthType
}) => (
  <Form className={classes.root} onSubmit={onSubmit}>
    <div className={classes.title}>Регистрация</div>
    <Field
      id="emailRegister"
      name="emailRegister"
      type="text"
      className={classes.field}
      component={InputField}
      placeholder="Email"
    />
    <Field
      id="passwordRegister"
      name="passwordRegister"
      type="password"
      className={classes.field}
      component={InputField}
      placeholder="Пароль"
    />
    <Field
      id="confirmpassword"
      name="confirmpassword"
      type="password"
      className={classes.field}
      component={InputField}
      placeholder="Повторите пароль"
    />

    {isErrorRegister && (
      <div className={classes.error}>Такой пользователь уже существует.</div>
    )}

    <button
      type="submit"
      className={cn(classes.submit, {
        disabled: false
      })}
    >
      Регистрация
    </button>

    <button
      className={classes.changeAuth}
      onClick={() => handleChangeAuthType()}
    >
      Авторизоваться
    </button>
  </Form>
)

Registration.propTypes = {
  classes: PropTypes.object,
  onSubmit: PropTypes.func,
  isErrorRegister: PropTypes.bool,
  handleChangeAuthType: PropTypes.func
}

export default withStyles(styles)(Registration)
