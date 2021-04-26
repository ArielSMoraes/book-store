import * as React from 'react'

import CategoryBooks from '../components/categoryBooks'
import SearchInput from '../components/searchInput'
import { GlobalRules } from '../styled-components/globalRules'

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
