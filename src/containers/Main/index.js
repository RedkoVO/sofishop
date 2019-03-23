import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withState, withHandlers, pure } from 'recompose'

import Main from '../../components/Main'

const mapStateToProps = state => ({
  cartTotal: state.total.data
})

export default compose(
  connect(mapStateToProps),
  withState('isShowCart', 'setShowCart', false),
  withHandlers({
    handleShowCart: ({ setShowCart }) => () => {
      setShowCart(true)
      document.body.style.overflow = 'hidden'
      window.scrollTo(0, 0)
    },

    handleCloseCart: ({ setShowCart }) => () => {
      setShowCart(false)
      document.body.style.overflow = 'auto'
    }
  }),
  pure
)(Main)
