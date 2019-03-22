import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'

import CartProduct from './components/CartProduct'

import styles from './styles'

const Cart = ({
  classes,
  isShowCart,
  cartTotal,
  cartProducts,
  removeProduct,
  handleCloseCart
}) => (
  <div className={cn(classes.wrCart, { disabled: !isShowCart })}>
    <div className={classes.overlay} onClick={() => handleCloseCart()} />
    <div className={classes.root}>
      <div className={classes.cart}>
        <div onClick={() => handleCloseCart()} className={classes.close}>
          X
        </div>
        <div className={classes.title}>Ваш заказ:</div>

        <div className={classes.cartProducts}>
          <div className="float-cart__shelf-container">
            {cartProducts.map(p => (
              <CartProduct
                product={p}
                removeProduct={removeProduct}
                key={p.id}
              />
            ))}
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
          </div>
        </div>
      </div>
    </div>
  </div>
)

Cart.propTypes = {
  classes: PropTypes.object,
  isShowCart: PropTypes.bool,
  handleCloseCart: PropTypes.func
}

export default withStyles(styles)(Cart)
