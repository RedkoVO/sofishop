import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import Product from './components/Product'

import styles from './styles'

const Products = ({ classes, products, handleAddProduct }) => {
  console.log('products', products)
  return (
  <div className={classes.root}>
    <div className="shelf-container">
      {products.map(item => (
        <Product product={item} addProduct={handleAddProduct} key={item.id} />
      ))}
    </div>
  </div>
)}

Products.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(Products)
