import compose from 'recompose/compose'
import { withHandlers, lifecycle, pure } from 'recompose'
import { connect } from 'react-redux'

import { updateCart } from '../../redux/actions/total'

import Cart from '../../components/Cart'

const mapStateToProps = state => ({
  cartProducts: state.cart.products,
  newProduct: state.cart.productToAdd,
  productToRemove: state.cart.productToRemove,
  cartTotal: state.total.data
})

export default compose(
  connect(mapStateToProps),
  withHandlers({
    addProduct: ({ cartProducts, dispatch }) => product => {
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

      dispatch(updateCart(cartProducts))
    },

    removeProduct: ({ cartProducts, dispatch }) => product => {
      const index = cartProducts.findIndex(p => p.id === product.id)

      if (index >= 0) {
        cartProducts.splice(index, 1)
        dispatch(updateCart(cartProducts))
      }
    }
  }),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      const {
        productToRemove,
        newProduct,
        addProduct,
        removeProduct
      } = this.props

      if (nextProps.newProduct !== newProduct) {
        addProduct(nextProps.newProduct)
      }

      if (nextProps.productToRemove !== productToRemove) {
        removeProduct(nextProps.productToRemove)
      }
    }
  }),
  pure
)(Cart)
