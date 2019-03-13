import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import RootRoute from '../../containers/App/Routes/RootRoute'

import store from '../../store'

const App = ({ initialState = {}, ...props }) => {
  const { history } = props

  return (
    <Provider store={store(initialState)}>
      <Router history={history}>
        <RootRoute />
      </Router>
    </Provider>
  )
}

export default App
