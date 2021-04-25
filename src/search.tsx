import React, { ChangeEvent, FunctionComponent, useEffect, useRef, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Img, Input, SearchWrapper } from './styled-components/styledSearch'

const Search: FunctionComponent = () => {
  const [searchActive, setSearchActive] = useState(false)
  const [inputText, setInputText] = useState("")
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
    const onChange = (e: ChangeEvent<HTMLInputElement> ) => setInputText(e.target.value)

    return (
      <>
        <Input
          key="searchInput"
          type="text"
          value={inputText}
          onChange={onChange}
          data-testid='searchInput'
          placeholder="Busca por livros ou autores"
          ref={inputRef}
        />
        <FaSearch
          data-testid='search-icon'
          size='22pt'
          color='#2D2D2E'
          onClick={toggleSearchActive}
        />
      </>
    )
  }

  //TODO: When input search update, the focus is losed (component rerender). Search other way to fix
  useEffect(() => {
    if (searchActive) {
      inputRef.current?.focus()
    }
  }, [searchActive, inputText])

  return (
    <SearchWrapper active={searchActive}>
      {searchActive ? <ActiveSearch /> : <InativeSearch />}
    </SearchWrapper>
  )
}

export default Search
