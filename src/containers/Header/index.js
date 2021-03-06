import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withState, withHandlers, pure, lifecycle } from 'recompose'

import Header from '../../components/Header'

import { logout, checkAuth } from '../../redux/actions/auth'

const mapStateToProps = state => {
  return {
    checkAuthUser: state.auth.checkAuth
  }
}

export default compose(
  connect(mapStateToProps),
  withState('isShowAuth', 'setShowAuth', false),
  withHandlers({
    handleShowAuth: ({ setShowAuth }) => () => {
      setShowAuth(true)
    },
    handleCloseAuth: ({ setShowAuth }) => () => {
      setShowAuth(false)
    },
    handleLogout: ({ dispatch }) => () => {
      localStorage.removeItem('token')
      dispatch(logout())
        .then(res => {
          if (res && res.success) {
            dispatch(checkAuth())
          }
        })
        .catch(err => {
          console.log('Error logout:', err)
        })
    }
  }),
  lifecycle({
    componentDidMount() {
      const { dispatch } = this.props

      dispatch(checkAuth())
    }
  }),
  pure
)(Header)
