import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import CartProduct from './components/CartProduct'

import styles from './styles'

const Cart = ({ classes, cartTotal, cartProducts, removeProduct }) => {
  const products = cartProducts.map(p => {
    return <CartProduct product={p} removeProduct={removeProduct} key={p.id} />
  })

  return (
    <div className={classes.root}>
      <div>
        ------------------------------------------------------------
        {/* If cart open, show close (x) button */}
        {true && (
          <div
            // onClick={() => this.closeFloatCart()}
            className="float-cart__close-btn"
          >
            X
          </div>
        )}
        {/* If cart is closed, show bag with quantity of product and open cart action */}
        {false && (
          <span
            onClick={() => this.openFloatCart()}
            className="bag bag--float-cart-closed"
          >
            <span className="bag__quantity">{cartTotal.productQuantity}</span>
          </span>
        )}
        <div className="float-cart__content">
          <div className="float-cart__header">
            <span className="bag">
              <span className="bag__quantity">
                {cartTotal && cartTotal.productQuantity}
              </span>
            </span>
            <span className="header-title">Bag</span>
          </div>

          <div className="float-cart__shelf-container">
            {products}
            {!products.length && (
              <p className="shelf-empty">
                Add some products in the bag <br />
                :)
              </p>
            )}
          </div>

          <div className="float-cart__footer">
            <div className="sub">SUBTOTAL</div>
            <div className="sub-price">
              <p className="sub-price__val">
                {`${cartTotal ? cartTotal.currencyFormat : ''} ${
                  cartTotal.totalPrice
                }`}
              </p>
              <small className="sub-price__installment">
                {cartTotal && !!cartTotal.installments && (
                  <span>
                    {`OR UP TO ${cartTotal.installments} x ${
                      cartTotal.currencyFormat
                    } ${cartTotal.totalPrice}`}
                  </span>
                )}
              </small>
            </div>
            <div
              /* onClick={() => this.proceedToCheckout()} */ className="buy-btn"
            >
              Checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Cart.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(Cart)
