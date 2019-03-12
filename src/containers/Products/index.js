import compose from 'recompose/compose'
import { withHandlers, lifecycle, pure } from 'recompose'
import { connect } from 'react-redux'

import Products from '../../components/Products'

import { fetchProducts } from '../../redux/actions/products'
import { addProduct } from '../../redux/actions/cart'

const mapStateToProps = state => ({
  products: state.products.products
})

export default compose(
  connect(mapStateToProps),
  withHandlers({
    handleAddProduct: ({ dispatch }) => product => {
      dispatch(addProduct(product))
    }
  }),
  lifecycle({
    componentDidMount() {
      const { dispatch } = this.props

      dispatch(fetchProducts())
    }
  }),
  pure
)(Products)
