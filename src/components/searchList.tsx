import React, { FunctionComponent, useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { Div } from '../styled-components/styledCategoryBooks'
import { BooksBoxSearch } from '../styled-components/styledSearch'
import ListBooks from './listBooks'

const SearchList: FunctionComponent = () => {
  const { term } = useParams()

  const googleApi = 'https://www.googleapis.com/books/v1/volumes'
  const source = `${googleApi}?q=${term}&startIndex=0&maxResults=20`
  const [listBooks, setListBooks] = useState([])

  useEffect(() => {
    fetch(source, { method: "GET" })
      .then(res => res.json())
      .then(response => {
        setListBooks(response.items)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <Div highlight={false}>
      <BooksBoxSearch>
        <ListBooks books={listBooks} wrap={true} />
      </BooksBoxSearch>
    </Div>
  )
}

export default SearchList
