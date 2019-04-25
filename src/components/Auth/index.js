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
  isLogin,
  isError,
  isErrorRegister
}) => (
  <div className={classes.root}>
    <div className={classes.overlay} onClick={() => handleCloseAuth()} />

    {isLogin ? (
      <Login
        onSubmit={onSubmitLogin}
        isError={isError}
        handleChangeAuthType={handleChangeAuthType}
      />
    ) : (
      <Registration
        onSubmit={onSubmitRegistration}
        isErrorRegister={isErrorRegister}
        handleChangeAuthType={handleChangeAuthType}
      />
    )}
  </div>
)

AuthModal.propTypes = {
  classes: PropTypes.object,
  onSubmitLogin: PropTypes.func,
  isError: PropTypes.bool,
  isErrorRegister: PropTypes.bool,
  isLogin: PropTypes.bool,
  handleCloseAuth: PropTypes.func,
  handleChangeAuthType: PropTypes.func
}

export default withStyles(styles)(AuthModal)
