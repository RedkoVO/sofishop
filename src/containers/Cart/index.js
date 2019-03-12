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
