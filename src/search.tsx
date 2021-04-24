import React, { FunctionComponent } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Img, SearchWrapper } from './styled-components/styledSearch'

const Search: FunctionComponent = () => {
  return (
    <SearchWrapper>
      <Img src='assets/logo.jpg'/>
      <FaSearch size='22pt' color='#2D2D2E' />
    </SearchWrapper>
  )
}

export default Search
