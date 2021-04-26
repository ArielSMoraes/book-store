import * as React from 'react'

import SearchInput from '../components/searchInput'
import SearchList from '../components/searchList'
import { GlobalRules } from '../styled-components/globalRules'

const Search = () => (
  <GlobalRules>
    <SearchInput />
    <SearchList />
  </GlobalRules>
)

export default Search
