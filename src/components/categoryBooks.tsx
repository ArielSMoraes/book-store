import React, { FunctionComponent, useEffect, useState } from 'react'
import * as BookStyled from '../styled-components/styledBooks'
import { Div, H2 } from '../styled-components/styledCategoryBooks'
import ListBooks from './listBooks'

type Props = {
  category: string,
  highlight?: boolean
}

const CategoryBooks: FunctionComponent<Props> = ({ category, highlight = false }: Props) => {
  const googleApi = 'https://www.googleapis.com/books/v1/volumes'
  const source = `${googleApi}?q=${category}&startIndex=0&maxResults=20`
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
    <Div highlight={highlight}>
      <H2 highlight={highlight}>{category}</H2>
      <BookStyled.BooksBox highlight={highlight}>
        <ListBooks highlight={highlight} books={listBooks} />
      </BookStyled.BooksBox>
    </Div>
  )
}

export default CategoryBooks
