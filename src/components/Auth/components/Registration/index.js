import React from 'react'
import PropTypes from 'prop-types'
import ReCAPTCHA from 'react-google-recaptcha'
import { Field, Form } from 'redux-form'
import cn from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'

import InputField from '../../../App/components/InputField'

import styles from './styles'

const Registration = ({
  classes,
  onSubmit,
  isErrorRegister,
  recaptchaError,
  handleChangeAuthType,
  handleChangeRecaptcha
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

    <ReCAPTCHA
      className={classes.recaptcha}
      sitekey="6LcwOJEUAAAAAEkWn7eDLwZ2V81nrrWDLHwk1_AE"
      onChange={handleChangeRecaptcha}
    />

    {isErrorRegister && (
      <div className={classes.error}>Такой пользователь уже существует.</div>
    )}
    {recaptchaError && <div className={classes.error}>{recaptchaError}</div>}

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
  recaptchaError: PropTypes.string,
  handleChangeAuthType: PropTypes.func,
  handleChangeRecaptcha: PropTypes.func
}

export default withStyles(styles)(Registration)
