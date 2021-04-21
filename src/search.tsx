import React, { FunctionComponent } from 'react'
import { FaSearch } from 'react-icons/fa'
import styled from "styled-components"

const SearchWrapper = styled.div`
  background-color: #EFFAFF;
  height: 22pt;
  display: flex;
  padding: 17pt;
  margin: -17pt;
  margin-bottom: 40pt;
  justify-content: space-between;
`

const Img = styled.img`
  height: 22pt;
`

const Search: FunctionComponent = () => {
  return (
    <SearchWrapper>
      <Img src='assets/logo.jpg'/>
      <FaSearch size='22pt' color='#2D2D2E' />
    </SearchWrapper>
  )
}

export default Search
