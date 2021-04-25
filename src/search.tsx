import * as React from 'react'

import SearchInput from './searchInput'
import SearchList from './searchList'
import { GlobalRules } from './styled-components/globalRules'

const Search = () => (
  <GlobalRules>
    <SearchInput />
    <SearchList />
  </GlobalRules>
)

export default Search
