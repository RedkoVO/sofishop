import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'

import AuthModal from '../../containers/Auth'

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
      <ul className={classes.menu}>
        <li>
          <NavLink
            to="#"
            exact
            activeClassName="active"
            className={classes.menuItem}
          >
            Здоровье
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#"
            exact
            activeClassName="active"
            className={classes.menuItem}
          >
            Развлечение
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#"
            exact
            activeClassName="active"
            className={classes.menuItem}
          >
            Красота
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#"
            exact
            activeClassName="active"
            className={classes.menuItem}
          >
            Спорт
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#"
            exact
            activeClassName="active"
            className={classes.menuItem}
          >
            Lifestyle
          </NavLink>
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
