import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { reduxForm, reset } from 'redux-form'
import { withState, withHandlers, lifecycle, pure } from 'recompose'

import { updateCart } from '../../redux/actions/total'
import { checkoutAdd, removeAllProducts } from '../../redux/actions/cart'

import validate from './validate'

import Cart from '../../components/Cart'

const mapStateToProps = state => ({
  cartProducts: state.cart.products,
  newProduct: state.cart.productToAdd,
  productToRemove: state.cart.productToRemove,
  cartTotal: state.total.data,
  paymentUrl: state.cart.checkoutAdd,
})

const FORM_NAME = 'Cart'

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: FORM_NAME,
    validate,
    pure: false
  }),
  withState('isSuccessCheckout', 'setSuccessCheckout', false),
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

    decreaseProduct: ({ cartProducts, dispatch, handleCloseCart }) => product => {
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
            handleCloseCart()
            console.log('0000', cp.quantity)
          } else {
            cp.quantity -= 1
            productAlreadyInCart = true
            changeQuantityProduct()
          }
        }
      })
    },

    removeProduct: ({ cartProducts, dispatch, handleCloseCart }) => product => {
      const index = cartProducts.findIndex(p => p.id === product.id)
      if (index >= 0) {
        cartProducts.splice(index, 1)
        dispatch(updateCart(cartProducts))
      }

      if (cartProducts.length === 0) {
        handleCloseCart()
      }
    },

    onSubmit: ({ handleSubmit, cartProducts, dispatch, setSuccessCheckout }) =>
      handleSubmit(variables => {
        const data = {
          products: cartProducts,
          ...variables
        }

        dispatch(checkoutAdd(data))
          .then(res => {
            if (res.success) {
              dispatch(removeAllProducts())
              dispatch(reset(FORM_NAME))
              setSuccessCheckout(true)
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
        removeProduct,
        isShowCart,
        setSuccessCheckout
      } = this.props

      if (nextProps.isShowCart !== isShowCart) {
        if (!nextProps.isShowCart) {
          setSuccessCheckout(false)
        }
      }

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
