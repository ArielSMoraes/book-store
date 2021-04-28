import React, { FunctionComponent } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { useHistory } from "react-router-dom"
import { HeaderWrapper, Text } from '../styled-components/styledHeader'

const Search: FunctionComponent = () => {
  const history = useHistory()

  const goToSearchPage = () => {
    history.push(`/`)
  }

  return (
    <HeaderWrapper blue={true}>
      <FaChevronLeft
        data-testid='back-page'
        size='22pt'
        color='#2D2D2E'
        onClick={goToSearchPage}
      />
      <Text>Resultados da Busca</Text>
    </HeaderWrapper>
  )
}

export default Search
