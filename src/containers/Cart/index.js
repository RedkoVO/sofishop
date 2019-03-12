import compose from 'recompose/compose'
import { withHandlers, lifecycle, pure } from 'recompose'
import { connect } from 'react-redux'

import { loadCart, removeProduct } from '../../redux/actions/cart'
import { updateCart } from '../../redux/actions/total'
// import CartProduct from './CartProduct'

import Cart from '../../components/Cart'

const mapStateToProps = state => ({
  cartProducts: state.cart.products
  // newProduct: state.cart.productToAdd,
  // productToRemove: state.cart.productToRemove,
  // cartTotal: state.total.data
})

export default compose(
  connect(mapStateToProps),
  withHandlers({
    addProduct: ({ cartProducts }) => product => {
      let productAlreadyInCart = false

      cartProducts.forEach(cp => {
        if (cp.id === product.id) {
          cp.quantity += product.quantity
          productAlreadyInCart = true
        }
      })

      if (!productAlreadyInCart) {
        cartProducts.push(product)
      }

      updateCart(cartProducts)
      this.openFloatCart()
    }
  }),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      const { productToRemove, newProduct } = this.props
      if (nextProps.newProduct !== newProduct) {
        this.addProduct(nextProps.newProduct)
      }

      if (nextProps.productToRemove !== productToRemove) {
        this.removeProduct(nextProps.productToRemove)
      }
    }
  }),
  pure
)(Cart)
