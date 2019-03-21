import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const Header = ({ classes }) => <div className={classes.root}>Header</div>

Header.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(Header)
