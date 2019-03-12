import React from 'react'
import { compose, pure } from 'recompose'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'

import Main from '../../Main'

const RootRoute = props => {
  const { location, history } = props

  return (
    <Switch location={location}>
      <Route path={'/'} history={history} component={Main} />
      <Redirect to="/" />
    </Switch>
  )
}

export default compose(
  withRouter,
  pure
)(RootRoute)
