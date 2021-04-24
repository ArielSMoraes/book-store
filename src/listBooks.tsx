import React, { FunctionComponent, useEffect, useState } from 'react'
import * as BookStyled from './styled-components/styleBooks'

type Props = {
  term: string,
  highlight: boolean
}

type Book = {
  id: string,
  volumeInfo: {
    title: string,
    imageLinks: {thumbnail: string}
  },
  categories: []
}

const ListBooks: FunctionComponent<Props> = ({term, highlight = false}: Props) => {
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
      <BookStyled.FigCaption>{book.volumeInfo?.title}</BookStyled.FigCaption>
    </BookStyled.Figure>
  ))

  return (
    <BookStyled.BooksBox highlight={highlight}>
      {listBooksComponent}
    </BookStyled.BooksBox>
  )
}

export default ListBooks
