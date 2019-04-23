import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'

import CartProduct from './components/CartProduct'
import CartForm from './components/CartForm'

import styles from './styles'

const Cart = ({
  classes,
  isShowCart,
  cartTotal,
  cartProducts,
  paymentUrl,
  removeProduct,
  handleCloseCart,
  increaseProduct,
  decreaseProduct,
  isSuccessCheckout,
  onSubmit
}) => (
  <div className={cn(classes.wrCart, { disabled: !isShowCart })}>
    <div className={classes.overlay} onClick={() => handleCloseCart()} />
    <div className={classes.root}>
      <div className={cn(classes.cart, { iframe: isSuccessCheckout })}>
        <div onClick={() => handleCloseCart()} className={classes.close}>
          X
        </div>

        {isSuccessCheckout ? (
          <iframe
            title="payment"
            src={paymentUrl.paymentUrl}
            className={classes.paymentIframe}
          />
        ) : (
          <React.Fragment>
            <div className={classes.title}>Ваш заказ:</div>
            <div className={classes.cartProducts}>
              {cartProducts.map(p => (
                <CartProduct
                  product={p}
                  increaseProduct={increaseProduct}
                  decreaseProduct={decreaseProduct}
                  removeProduct={removeProduct}
                  key={p.id}
                />
              ))}
            </div>

            <div className={classes.total}>
              Сумма: {`${cartTotal.totalPrice} ${cartTotal ? 'грн' : ''}`}
            </div>

            <CartForm onSubmit={onSubmit} />
          </React.Fragment>
        )}
      </div>
    </div>
  </div>
)

Cart.propTypes = {
  classes: PropTypes.object,
  isShowCart: PropTypes.bool,
  isSuccessCheckout: PropTypes.bool,
  cartTotal: PropTypes.object,
  cartProducts: PropTypes.array,
  paymentUrl: PropTypes.object,
  removeProduct: PropTypes.func,
  handleCloseCart: PropTypes.func,
  increaseProduct: PropTypes.func,
  decreaseProduct: PropTypes.func,
  onSubmit: PropTypes.func
}

export default withStyles(styles)(Cart)
