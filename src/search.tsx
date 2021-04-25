import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Img, Input, SearchWrapper } from './styled-components/styledSearch'

const Search: FunctionComponent = () => {
  const [searchActive, setSearchActive] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const toggleSearchActive = () => {
    setSearchActive(!searchActive)
  }

  const InativeSearch = () => {
    return (
      <>
        <Img src='assets/logo.jpg' data-testid='logo' />
        <FaSearch
          data-testid='search-icon'
          size='22pt'
          color='#2D2D2E'
          onClick={toggleSearchActive}
        />
      </>
    )
  }

  const ActiveSearch = () => {
    return (
      <>
        <Input data-testid='searchInput' placeholder="Busca por livros ou autores" ref={inputRef}/>
        <FaSearch
          data-testid='search-icon'
          size='22pt'
          color='#2D2D2E'
          onClick={toggleSearchActive}
        />
      </>
    )
  }

  useEffect(() => {
    if (searchActive) {
      inputRef.current?.focus()
    }
  }, [searchActive])

  return (
    <SearchWrapper active={searchActive}>
      {searchActive ? <ActiveSearch /> : <InativeSearch />}
    </SearchWrapper>
  )
}

export default Search
