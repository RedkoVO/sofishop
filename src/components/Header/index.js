import React from 'react'
import PropTypes from 'prop-types'
// import { NavLink } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'

import AuthModal from '../../containers/Auth'

import LogoIcon from '../../assets/images/logo.jpg'

import styles from './styles'

const Header = ({
  classes,
  isShowAuth,
  handleShowAuth,
  handleCloseAuth,
  handleLogout,
  checkAuthUser
}) => (
  <React.Fragment>
    <div className={classes.root}>
      <div className={classes.logo}>
        <img src={LogoIcon} alt="" />
      </div>
      <ul className={classes.menu}>
        <li>
          {/* <NavLink
            to="https://sophiaiq.com/?utm_referrer=#rec96385388"
            exact
            activeClassName="active"
            className={classes.menuItem}
          >
            Анализ личности
          </NavLink> */}
          <a
            href="https://sophiaiq.com/?utm_referrer=#rec96385388"
            className={classes.menuItem}
            target="_blank"
            rel="noopener noreferrer"
          >
            Анализ личности
          </a>
        </li>
        <li>
          <a
            href="https://immo.sophiaiq.com/"
            className={classes.menuItem}
            target="_blank"
            rel="noopener noreferrer"
          >
            Молодость
          </a>
        </li>
        <li>
          <a
            href="https://future.sophiaiq.com/"
            className={classes.menuItem}
            target="_blank"
            rel="noopener noreferrer"
          >
            Бизнес
          </a>
        </li>
      </ul>
      {checkAuthUser && checkAuthUser.email ? (
        <div className={classes.user}>
          {checkAuthUser.email}{' '}
          <div className={classes.logout} onClick={() => handleLogout()}>
            Выйти
          </div>
        </div>
      ) : (
        <div className={classes.auth} onClick={() => handleShowAuth()}>
          Авторизация
        </div>
      )}
    </div>

    {isShowAuth && <AuthModal handleCloseAuth={handleCloseAuth} />}
  </React.Fragment>
)

Header.propTypes = {
  classes: PropTypes.object,
  isShowAuth: PropTypes.bool,
  checkAuthUser: PropTypes.object,
  handleShowAuth: PropTypes.func,
  handleCloseAuth: PropTypes.func,
  handleLogout: PropTypes.func
}

export default withStyles(styles)(Header)
