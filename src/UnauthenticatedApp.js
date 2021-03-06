import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from 'routes/Login'
import Register from 'routes/Register'

const UnauthenticatedApp = () => (
  <Switch>
    <Route path='/login' component={Login} />
    <Route path='/register' component={Register} />
    <Redirect to='/register' />
  </Switch>
)

export default UnauthenticatedApp
