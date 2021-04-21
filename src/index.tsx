import * as React from 'react'
import { render } from 'react-dom'

import { GlobalRules } from 'globalRules'
import CategoryBooks from './categoryBooks'
import Search from './search'

const App = () => (
  <GlobalRules>
    <Search />
    <CategoryBooks category='Aventura' />
    <CategoryBooks category='Infantil' />
    <CategoryBooks category='Destaques' />
    <CategoryBooks category='Ação' />
  </GlobalRules>
)

render(<App />, document.getElementById('root'))
