import { SearchContext } from 'pages/search'
import React, { FunctionComponent, useContext } from 'react'
import { useParams } from "react-router-dom"
import useListBooks from '../hooks/useListBooks'
import { Div } from '../styled-components/styledCategoryBooks'
import { BooksBoxSearch } from '../styled-components/styledHeader'
import ListBooks from './listBooks'

const SearchList: FunctionComponent = () => {
  const searchContext = useContext(SearchContext)
  const { term } = useParams<Record<string, string | undefined>>()

  const listBooks = useListBooks(term, searchContext.state.filters)

  return (
    <Div highlight={false}>
      <BooksBoxSearch>
        <ListBooks books={listBooks} wrap={true} />
      </BooksBoxSearch>
    </Div>
  )
}

export default SearchList
