import React from "react"
import { render } from 'react-dom'

import Home from './home'
import Search from './search'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"

const App = () => (
  <Router>
    <Switch>
      <Route exact={true} path="/">
        <Home />
      </Route>
      <Route path="/search/:term">
        <Search />
      </Route>
    </Switch>
  </Router>
)

render(<App />, document.getElementById('root'))
