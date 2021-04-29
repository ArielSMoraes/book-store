import * as React from 'react'

import FilterButton from '../components/filterButton'
import SearchedHeader from '../components/searchedHeader'
import SearchList from '../components/searchList'
import { GlobalRules } from '../styled-components/globalRules'

const Search = () => (
  <GlobalRules>
    <SearchedHeader />
    <FilterButton />
    <SearchList />
  </GlobalRules>
)

export default Search
