import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import Products from '../../containers/Products'
import Cart from '../../containers/Cart'

import CartIcon from '../../assets/images/icon-cart.png'

import styles from './styles'

const Main = ({
  classes,
  isShowCart,
  handleShowCart,
  handleCloseCart,
  cartTotal
}) => (
  <div className={classes.root}>
    <main>
      <Products />
    </main>

    <Cart handleCloseCart={handleCloseCart} isShowCart={isShowCart} />

    {cartTotal.productQuantity > 0 && (
      <div className={classes.cartPreview} onClick={() => handleShowCart()}>
        <img src={CartIcon} alt="" />
        <div className={classes.counter}>{cartTotal.productQuantity}</div>
      </div>
    )}
  </div>
)

Main.propTypes = {
  classes: PropTypes.object,
  isShowCart: PropTypes.bool,
  cartTotal: PropTypes.object,
  handleShowCart: PropTypes.func,
  handleCloseCart: PropTypes.func
}

export default withStyles(styles)(Main)
