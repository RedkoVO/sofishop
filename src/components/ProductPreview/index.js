import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import CloseIcon from '../../assets/images/close-preview.png'

import styles from './styles'

const ProductPreview = ({
  classes,
  product,
  handleClosePreview,
  handleAddProduct
}) => (
  <div className={classes.root}>
    <div className={classes.header}>
      <div className={classes.return} onClick={() => handleClosePreview()}>
        More products
      </div>
      <img
        className={classes.close}
        onClick={() => handleClosePreview()}
        src={CloseIcon}
        alt=""
      />
    </div>
    <div className={classes.content}>
      <div className={classes.img}>
        <img src={product.images[0]} alt="" />
      </div>
      <div className={classes.wrDescription}>
        <div className={classes.title}>{product.title}</div>
        <div className={classes.price}>{product.price} грн</div>
        <button className={classes.button} onClick={() => handleAddProduct(product)}>Купить</button>
        <div className={classes.description}>{product.description}</div>
      </div>
    </div>
  </div>
)

ProductPreview.propTypes = {
  classes: PropTypes.object,
  product: PropTypes.object,
  handleClosePreview: PropTypes.func,
  handleAddProduct: PropTypes.func
}

export default withStyles(styles)(ProductPreview)
