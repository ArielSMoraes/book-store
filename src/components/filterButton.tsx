import React, { FunctionComponent, useContext } from 'react'
import { FaFilter } from 'react-icons/fa'
import { Button } from 'styled-components/styledButtons'
import { SearchContext } from '../pages/search'

const FilterButton: FunctionComponent = () => {
  const searchContext = useContext(SearchContext)

  const handleClick = () => {
    searchContext.dispatch({ type: 'TOGGLE_FILTER'})
  }

  return (
    <Button onClick={handleClick}>
      <FaFilter
        data-testid='filter-button'
        size='12pt'
        color='white'
        style={{marginRight: '8pt'}}
      />
      <span>Filtrar</span>
    </Button>
  )
}

export default FilterButton
