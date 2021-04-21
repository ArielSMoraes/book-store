import * as React from 'react'
import { render } from 'react-dom'

import { GlobalRules } from 'global-rules'
import { Search } from './search'

const App = () => (
  <GlobalRules>
    <Search />
  </GlobalRules>
)

render(<App />, document.getElementById('root'))
