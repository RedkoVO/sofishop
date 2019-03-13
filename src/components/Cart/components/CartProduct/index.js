import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import { formatPrice } from '../../../../utils/formatPrice'

import styles from './styles'

const CartProduct = ({ classes, product, removeProduct }) => {
  return (
    <div className={classes.root}>
      <div
        className="shelf-item__del"
        onClick={() => removeProduct(product)}
      >
        --- DELETE ---
      </div>

      <div className="shelf-item__details">
        <p className="title">{product.title}</p>
        <p className="desc">
          {`${product.availableSizes[0]} | ${product.style}`} <br />
          Quantity: {product.quantity}
        </p>
      </div>
      <div className="shelf-item__price">
        <p>{`${product.currencyFormat}  ${formatPrice(product.price)}`}</p>
      </div>

      <div className="clearfix" />
    </div>
  )
}

CartProduct.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(CartProduct)