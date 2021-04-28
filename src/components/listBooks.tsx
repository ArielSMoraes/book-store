import React, { FunctionComponent } from 'react'
import * as BookStyled from '../styled-components/styledBooks'
import { Book } from '../types/book'

type Props = {
  books: Book[],
  wrap?: boolean
}

const ListBooks: FunctionComponent<Props> = ({books, wrap = false}: Props) => {
  const listBooksComponent = books.map( (book: Book) => (
    <BookStyled.Figure key={book.id} $wrap={wrap}>
      <BookStyled.Img src={book.volumeInfo?.imageLinks?.thumbnail} />
      <BookStyled.FigCaption>{book.volumeInfo?.title}</BookStyled.FigCaption>
    </BookStyled.Figure>
  ))

  return <>{listBooksComponent}</>
}

export default ListBooks
