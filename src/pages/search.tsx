import React, { useReducer } from 'react'
import { FilterActions, FilterState, initialFilterState, reducerFilter } from '../reducers/filterReducer'

import FilterButton from '../components/filterButton'
import FilterWindow from '../components/filterWindow'
import SearchedHeader from '../components/searchedHeader'
import SearchList from '../components/searchList'
import { GlobalRules } from '../styled-components/globalRules'

export const SearchContext = React.createContext<{
  state: FilterState;
  dispatch: React.Dispatch<FilterActions>
}>({state: initialFilterState, dispatch: () => undefined})

const SearchResult = () => (
  <>
    <SearchedHeader />
    <FilterButton />
    <SearchList />
  </>
)

const Search = () => {
  const [ state, dispatch ] = useReducer(reducerFilter, initialFilterState)

  return (
    <SearchContext.Provider value={{state, dispatch}}>
      <GlobalRules>
        {state.filterOpen ? <FilterWindow /> : <SearchResult />}
        <div>
          next
        </div>
      </GlobalRules>
    </SearchContext.Provider>
  )
}

export default Search
