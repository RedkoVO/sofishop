import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import Products from '../../containers/Products'
import Cart from '../../containers/Cart'

import styles from './styles'

const Main = ({ classes }) => (
  <div className={classes.root}>
    <main>
      <Products />
    </main>
    <Cart />
  </div>
)

Main.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(Main)
