import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import Login from './components/Login'
import Registration from './components/Registration'

import styles from './styles'

const AuthModal = ({
  classes,
  onSubmitLogin,
  onSubmitRegistration,
  handleCloseAuth,
  handleChangeAuthType,
  handleChangeRecaptcha,
  isLogin,
  isError,
  isErrorRegister,
  recaptchaError,
  isShowSuccessRegistration
}) => (
  <div className={classes.root}>
    <div className={classes.overlay} onClick={() => handleCloseAuth()} />

    {isShowSuccessRegistration ? (
      <div className={classes.succesRegistration}>
        Вам на почту отправлен email.
      </div>
    ) : (
      <React.Fragment>
        {isLogin ? (
          <Login
            onSubmit={onSubmitLogin}
            isError={isError}
            handleChangeAuthType={handleChangeAuthType}
          />
        ) : (
          <Registration
            onSubmit={onSubmitRegistration}
            recaptchaError={recaptchaError}
            isErrorRegister={isErrorRegister}
            handleChangeAuthType={handleChangeAuthType}
            handleChangeRecaptcha={handleChangeRecaptcha}
          />
        )}
      </React.Fragment>
    )}
  </div>
)

AuthModal.propTypes = {
  classes: PropTypes.object,
  onSubmitLogin: PropTypes.func,
  isError: PropTypes.bool,
  isErrorRegister: PropTypes.bool,
  isShowSuccessRegistration: PropTypes.bool,
  recaptchaError: PropTypes.string,
  isLogin: PropTypes.bool,
  handleCloseAuth: PropTypes.func,
  handleChangeAuthType: PropTypes.func,
  handleChangeRecaptcha: PropTypes.func
}

export default withStyles(styles)(AuthModal)
