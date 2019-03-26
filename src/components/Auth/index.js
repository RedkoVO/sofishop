import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const AuthModal = ({ classes }) => (
  <div className={classes.root}>
    AUTH
  </div>
)

AuthModal.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(AuthModal)
