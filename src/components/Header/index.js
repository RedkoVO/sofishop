import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'

import AuthModal from '../../containers/Auth'

import styles from './styles'

const Header = ({ classes }) => (
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
      <div className={classes.auth}>Авторизация</div>
    </div>

    <AuthModal />
  </React.Fragment>
)

Header.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(Header)
