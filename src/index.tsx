import * as React from 'react'
import { render } from 'react-dom'

import CategoryBooks from './categoryBooks'
import { GlobalRules } from './globalRules'
import Search from './search'

const App = () => (
  <GlobalRules>
    <Search />
    <CategoryBooks category='Aventura' />
    <CategoryBooks category='Infantil' />
    <CategoryBooks category='Destaques' highlight={true} />
    <CategoryBooks category='Ação' />
  </GlobalRules>
)

render(<App />, document.getElementById('root'))
