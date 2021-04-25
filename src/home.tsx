import * as React from 'react'

import CategoryBooks from './categoryBooks'
import SearchInput from './searchInput'
import { GlobalRules } from './styled-components/globalRules'

const Home = () => (
  <GlobalRules>
    <SearchInput />
    <CategoryBooks category='Aventura' />
    <CategoryBooks category='Infantil' />
    <CategoryBooks category='Destaques' highlight={true} />
    <CategoryBooks category='Ação' />
  </GlobalRules>
)

export default Home
