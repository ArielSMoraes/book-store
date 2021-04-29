import React, { FunctionComponent } from 'react'
import { FaFilter } from 'react-icons/fa'
import { Text } from '../styled-components/styledHeader'

const FilterButton: FunctionComponent = () => {
  return (
    <div>
      <FaFilter
        data-testid='filter-button'
        size='22pt'
        color='#2D2D2E'
      />
      <Text>Resultados da Busca</Text>
    </div>
  )
}

export default FilterButton
