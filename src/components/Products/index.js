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
      Лаборатория SophiaIQ провела исследования более чем 300 различных
      сертифицированных препаратов, представленных в категориях восстановления,
      омоложения и повышения жизненного тонуса орагнизма. По результатам
      испытаний SophiaIQ рекомендует производителей D4X Smart Food для быстрого
      и 100% восстановления оптимального жизненного баланса человека. SmartFood
      созданы с использванием нанотехнологий и используют в своей основе
      натуральные и экологически чистые ингредиенты. Применение нанотехнологий в
      производстве позволяет использовать частицы полезных веществ очень малого
      размера (не более 100 нанометров), что значительно повышает эффективность
      усвоения биологически активных веществ в составе продукции
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
