import React from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'
import withStyles from '@material-ui/core/styles/withStyles'

import Products from '../../containers/Products'
import Cart from '../../containers/Cart'
import ProductPreview from '../../containers/ProductPreview'

import CartIcon from '../../assets/images/icon-cart.png'

import styles from './styles'

const Main = ({
  classes,
  isShowCart,
  handleShowCart,
  handleCloseCart,
  handleShowPreview,
  handleClosePreview,
  cartTotal,
  choosedProduct
}) => (
  <div className={classes.root}>
    <main>
      <Products handleShowPreview={handleShowPreview} />
    </main>

    <Cart handleCloseCart={handleCloseCart} isShowCart={isShowCart} />

    {!isEmpty(choosedProduct) && (
      <ProductPreview
        product={choosedProduct}
        handleClosePreview={handleClosePreview}
      />
    )}

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
  choosedProduct: PropTypes.object,
  handleShowCart: PropTypes.func,
  handleCloseCart: PropTypes.func,
  handleShowPreview: PropTypes.func,
  handleClosePreview: PropTypes.func
}

export default withStyles(styles)(Main)
