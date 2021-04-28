import * as React from 'react'

import SearchedHeader from '../components/searchedHeader'
import SearchList from '../components/searchList'
import { GlobalRules } from '../styled-components/globalRules'

const Search = () => (
  <GlobalRules>
    <SearchedHeader />
    <SearchList />
  </GlobalRules>
)

export default Search
