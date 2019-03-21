import React from 'react'
import { compose, pure } from 'recompose'
import { Redirect, Switch, withRouter } from 'react-router-dom'

import RoutePage from '../../../components/App/components/Routes/RoutePage'

import Main from '../../Main'

const RootRoute = props => {
  const { location, history } = props

  return (
    <Switch location={location}>
      <RoutePage path={'/'} history={history} component={Main} />
      <Redirect to="/" />
    </Switch>
  )
}

export default compose(
  withRouter,
  pure
)(RootRoute)
