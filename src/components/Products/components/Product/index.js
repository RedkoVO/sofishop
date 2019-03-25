import React from 'react'
import PropTypes from 'prop-types'
import compose from 'recompose/compose'
import { withState, withHandlers, pure } from 'recompose'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const Product = ({
  classes,
  product,
  addProduct,
  isPictereHover,
  hoverOn,
  hoverOff,
  handleShowPreview
}) => {
  product.quantity = 1

  return (
    <div className={classes.root}>
      <div
        className={classes.picture}
        onMouseEnter={() => hoverOn()}
        onMouseLeave={() => hoverOff()}
      >
        {isPictereHover ? (
          <React.Fragment>
            <img
              src={product.images[1] ? product.images[1] : product.images[0]}
              alt=""
            />
          </React.Fragment>
        ) : (
          <img src={product.images[0]} alt="" />
        )}
      </div>
      <p className={classes.title}>{product.title}</p>
      <div className={classes.price}>
        {product.price} <small>грн</small>
      </div>
      {/* <button className={classes.addToCart} onClick={() => addProduct(product)}> */}
      <button className={classes.addToCart} onClick={() => handleShowPreview(product)}>
        Добавить в корзину
      </button>
      <button className={classes.learnMore}>Узнать больше</button>
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  isPictereHover: PropTypes.bool,
  addProduct: PropTypes.func.isRequired,
  hoverOn: PropTypes.func.isRequired,
  hoverOff: PropTypes.func.isRequired,
  handleShowPreview: PropTypes.func
}

export default compose(
  withState('isPictereHover', 'setProductHover', false),
  withHandlers({
    hoverOn: ({ setProductHover }) => () => {
      setProductHover(true)
    },
    hoverOff: ({ setProductHover }) => () => {
      setProductHover(false)
    }
  }),
  pure
)(withStyles(styles)(Product))
