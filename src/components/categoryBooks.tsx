import React, { FunctionComponent } from 'react'
import useListBooks from '../hooks/useListBooks'
import * as BookStyled from '../styled-components/styledBooks'
import { Div, H2 } from '../styled-components/styledCategoryBooks'
import ListBooks from './listBooks'

type Props = {
  category: string,
  search: string,
  highlight?: boolean
}

const CategoryBooks: FunctionComponent<Props> = ({ category, search, highlight = false }: Props) => {
  const listBooks = useListBooks(search)

  return (
    <Div highlight={highlight}>
      <H2 highlight={highlight}>{category}</H2>
      <BookStyled.BooksBox highlight={highlight}>
        <ListBooks books={listBooks} />
      </BookStyled.BooksBox>
    </Div>
  )
}

export default CategoryBooks
