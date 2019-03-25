import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withHandlers, pure } from 'recompose'

import { addProduct } from '../../redux/actions/cart'

import ProductPreview from '../../components/ProductPreview'

export default compose(
  connect(),
  withHandlers({
    handleAddProduct: ({ dispatch, handleClosePreview }) => product => {
      dispatch(addProduct(product))
      handleClosePreview()
    }
  }),
  pure
)(ProductPreview)
