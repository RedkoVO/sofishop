import React from 'react'
import PropTypes from 'prop-types'

import { formatPrice } from '../../../../utils/formatPrice'

const Product = ({ product, addProduct }) => {
  product.quantity = 1

  let formattedPrice = formatPrice(product.price, product.currencyId)

  return (
    <div
      className="shelf-item"
      onClick={() => addProduct(product)}
      data-sku={product.sku}
    >
      {product.isFreeShipping && (
        <div className="shelf-stopper">Free shipping</div>
      )}
      <p className="shelf-item__title">{product.title}</p>
      <div className="shelf-item__price">
        <div className="val">
          <small>{product.currencyFormat}</small>
          {formattedPrice.substr(0, formattedPrice.length - 3)}
          {formattedPrice.substr(formattedPrice.length - 3, 3)}
        </div>
      </div>
      <div className="shelf-item__buy-btn">Add to cart</div>
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired
}

export default Product
