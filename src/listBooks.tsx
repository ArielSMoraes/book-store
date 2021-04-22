import React, { FunctionComponent, useEffect, useState } from 'react'
import * as BookStyled from './styleBooks'

type Props = {
  term: string
}

export type Book = {
  id: string,
  volumeInfo: {
    title: string,
    imageLinks: {thumbnail: string}
  },
  categories: []
}

const ListBooks: FunctionComponent<Props> = ({term}: Props) => {
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

  const listBooksComponent = listBooks.map( (book: Book) => (
    <BookStyled.Figure key={book.id}>
      <BookStyled.Img src={book.volumeInfo?.imageLinks?.thumbnail} />
      <figcaption>{book.volumeInfo?.title}</figcaption>
    </BookStyled.Figure>
  ))

  return (
    <BookStyled.BooksBox>
      {listBooksComponent}
    </BookStyled.BooksBox>
  )
}

export default ListBooks
