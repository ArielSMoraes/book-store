import React, { ChangeEvent, FunctionComponent, useEffect, useRef, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useHistory } from "react-router-dom"
import { HeaderWrapper, Img, Input } from '../styled-components/styledHeader'

const FindInput: FunctionComponent = () => {
  const [searchActive, setSearchActive] = useState(false)
  const [inputText, setInputText] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const history = useHistory()

  const toggleSearchActive = () => {
    setSearchActive(!searchActive)
  }

  const goToSearchPage = () => {
    if (inputText !== '') {
      history.push(`/search/${inputText}`)
    }
  }

  const InativeSearch = () => {
    return (
      <>
        <Img src='/assets/logo.jpg' data-testid='logo' />
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
          key="findInput"
          type="text"
          value={inputText}
          onChange={onChange}
          data-testid='search-input'
          placeholder="Busca por livros ou autores"
          ref={inputRef}
        />
        <FaSearch
          data-testid='do-search'
          size='22pt'
          color='#2D2D2E'
          onClick={goToSearchPage}
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
    <HeaderWrapper blue={searchActive}>
      {searchActive ? <ActiveSearch /> : <InativeSearch />}
    </HeaderWrapper>
  )
}

export default FindInput
