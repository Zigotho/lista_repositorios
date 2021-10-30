import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'
import { Home } from './Pages/Home'

export function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}
