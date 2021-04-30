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

const Search = () => {
  const [ state, dispatch ] = useReducer(reducerFilter, initialFilterState)

  const SearchComponents = () => {
    if (state.filterOpen) {
      return <FilterWindow />
    }

    return (
      <>
        <SearchedHeader />
        <FilterButton />
        <SearchList />
      </>
    )
  }

  return (
    <SearchContext.Provider value={{state, dispatch}}>
      <GlobalRules>
        <SearchComponents />
      </GlobalRules>
    </SearchContext.Provider>
  )
}

export default Search
