import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { withHandlers, lifecycle, pure } from 'recompose'

import { updateCart } from '../../redux/actions/total'
import { checkoutAdd } from '../../redux/actions/cart'

import validate from './validate'

import Cart from '../../components/Cart'

const mapStateToProps = state => ({
  cartProducts: state.cart.products,
  newProduct: state.cart.productToAdd,
  productToRemove: state.cart.productToRemove,
  cartTotal: state.total.data
})

const FORM_NAME = 'Cart'

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: FORM_NAME,
    validate
  }),
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

    increaseProduct: ({ cartProducts, dispatch }) => product => {
      let productAlreadyInCart = false

      cartProducts.forEach(cp => {
        if (cp.id === product.id) {
          cp.quantity += 1
          productAlreadyInCart = true
        }
      })

      if (!productAlreadyInCart) {
        cartProducts.push(product)
      }

      dispatch(updateCart(cartProducts))
    },

    decreaseProduct: ({ cartProducts, dispatch }) => product => {
      let productAlreadyInCart = false
      const removeProduct = () => {
        const index = cartProducts.findIndex(p => p.id === product.id)

        if (index >= 0) {
          cartProducts.splice(index, 1)
          dispatch(updateCart(cartProducts))
        }
      }
      const changeQuantityProduct = () => {
        if (!productAlreadyInCart) {
          cartProducts.push(product)
        }
        dispatch(updateCart(cartProducts))
      }

      cartProducts.forEach(cp => {
        if (cp.id === product.id) {
          if (cp.quantity === 1) {
            removeProduct()
          } else {
            cp.quantity -= 1
            productAlreadyInCart = true
            changeQuantityProduct()
          }
        }
      })
    },

    removeProduct: ({ cartProducts, dispatch }) => product => {
      const index = cartProducts.findIndex(p => p.id === product.id)
      if (index >= 0) {
        cartProducts.splice(index, 1)
        dispatch(updateCart(cartProducts))
      }
    },

    onSubmit: ({ handleSubmit, cartProducts, dispatch }) =>
      handleSubmit(variables => {
        const data = {
          products: cartProducts,
          ...variables
        }
        // console.log('data', data)

        dispatch(checkoutAdd(data))
          .then(res => {
            if (res.success) {
              // dispatch(updateCart([]))
            }
          })
          .catch(err => {
            console.log('Error: Checkout Add', err)
          })
      })
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
