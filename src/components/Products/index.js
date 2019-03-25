import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import Product from './components/Product'

import styles from './styles'

const Products = ({
  classes,
  products,
  handleAddProduct,
  handleShowPreview
}) => (
  <div className={classes.root}>
    <div className={classes.description}>
      Наши деревянные головоломки — это игры, сочетающие талант мастера и чистый
      стильный дизайн. Мы очень гордимся мастерством наших ремесленников и нашей
      причастностью к совершенству
    </div>
    <div className={classes.wrProducts}>
      {products &&
        products.map(item => (
          <Product
            product={item}
            addProduct={handleAddProduct}
            handleShowPreview={handleShowPreview}
            key={item.id}
          />
        ))}
    </div>

    <div className={classes.wrDelivery}>
      <div className={classes.title}>О доставке</div>
      <div className={classes.delivery}>
        О доставке Доставляем оплаченный заказ курьером в течение двух рабочих
        дней. Чтобы заказать срочную доставку или альтернативные способы
        доставки, напишите свои пожелания в комментариях во время заказа.
      </div>
    </div>
  </div>
)

Products.propTypes = {
  classes: PropTypes.object,
  products: PropTypes.array,
  handleAddProduct: PropTypes.func,
  handleShowPreview: PropTypes.func
}

export default withStyles(styles)(Products)
