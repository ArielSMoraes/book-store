import React, { FunctionComponent } from 'react'
import * as BookStyled from '../styled-components/styledBooks'
import { Book } from '../types/book'

type Props = {
  books: Book[],
  highlight?: boolean
}

const ListBooks: FunctionComponent<Props> = ({books, highlight = false}: Props) => {
  const listBooksComponent = books.map( (book: Book) => (
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
