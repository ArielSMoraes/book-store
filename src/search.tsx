import React, { FunctionComponent, useState } from 'react'
import { FaSearch, FaBacon } from 'react-icons/fa'
import { Img, SearchWrapper } from './styled-components/styledSearch'

const Search: FunctionComponent = () => {
  const [searchActive, setSearchActive] = useState(false)

  const toggleSearchActive = () => {
    setSearchActive(!searchActive)
  }

  const InativeSearch = () => {
    return (
      <SearchWrapper>
        <Img src='assets/logo.jpg'/>
        <FaSearch size='22pt' color='#2D2D2E' onClick={toggleSearchActive}/>
      </SearchWrapper>
    )
  }

  const ActiveSearch = () => {
    return (
      <SearchWrapper>
        <FaBacon size='22pt' color='#2D2D2E' onClick={toggleSearchActive}/>
      </SearchWrapper>
    )
  }

  return searchActive ? <ActiveSearch /> : <InativeSearch />
}

export default Search
