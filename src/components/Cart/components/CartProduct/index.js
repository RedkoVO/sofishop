import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import { ReactComponent as MinusIcon } from '../../../../assets/images/arrows_circle_minus.svg'
import { ReactComponent as PlusIcon } from '../../../../assets/images/arrows_circle_plus.svg'
import { ReactComponent as RemoveIcon } from '../../../../assets/images/arrows_circle_remove.svg'

import styles from './styles'

const CartProduct = ({
  classes,
  product,
  increaseProduct,
  decreaseProduct,
  removeProduct
}) => {
  return (
    <div className={classes.root}>
      <div className={classes.picture}>
        <img src={product.images[0]} alt="" />
      </div>

      <div className={classes.title}>{product.title}</div>
      <div className={classes.quantity}>
        <MinusIcon
          className={classes.quantityIcon}
          onClick={() => decreaseProduct(product)}
        />
        <div>{product.quantity}</div>
        <PlusIcon
          className={classes.quantityIcon}
          onClick={() => increaseProduct(product)}
        />
      </div>
      <div className={classes.price}>{product.price} $</div>
      <RemoveIcon
        className={classes.remove}
        onClick={() => removeProduct(product)}
      />
    </div>
  )
}

CartProduct.propTypes = {
  classes: PropTypes.object,
  product: PropTypes.object,
  increaseProduct: PropTypes.func,
  decreaseProduct: PropTypes.func,
  removeProduct: PropTypes.func
}

export default withStyles(styles)(CartProduct)
