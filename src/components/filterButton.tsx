import React, { FunctionComponent, useContext } from 'react'
import { FaFilter } from 'react-icons/fa'
import { SearchContext } from '../pages/search'
import { Button } from '../styled-components/styledButtons'

const FilterButton: FunctionComponent = () => {
  const searchContext = useContext(SearchContext)

  const handleClick = () => {
    searchContext.dispatch({ type: 'TOGGLE_FILTER'})
  }

  return (
    <Button data-testid="toggleFilter" onClick={handleClick}>
      <FaFilter
        data-testid='filter-button'
        size='12pt'
        color='white'
        style={{marginRight: '8pt'}}
      />
      <span data-testid="filter">Filtrar</span>
    </Button>
  )
}

export default FilterButton
