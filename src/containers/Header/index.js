import compose from 'recompose/compose'
import { withState, withHandlers, pure } from 'recompose'

import Header from '../../components/Header'

export default compose(
  withState('isShowAuth', 'setShowAuth', false),
  withHandlers(
    
  ),
  pure
)(Header)
