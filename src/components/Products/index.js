import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import Product from './components/Product'

import styles from './styles'

const Products = ({ classes, products, handleAddProduct }) => (
  <div className={classes.root}>
    <div className={classes.description}>
      Наши деревянные головоломки — это игры, сочетающие талант мастера и чистый
      стильный дизайн. Мы очень гордимся мастерством наших ремесленников и нашей
      причастностью к совершенству
    </div>
    <div className={classes.wrProducts}>
      {products.map(item => (
        <Product product={item} addProduct={handleAddProduct} key={item.id} />
      ))}
    </div>
  </div>
)

Products.propTypes = {
  classes: PropTypes.object,
  products: PropTypes.array,
  handleAddProduct: PropTypes.func.isRequired
}

export default withStyles(styles)(Products)
