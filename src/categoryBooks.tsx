import React, { FunctionComponent } from 'react'
import ListBooks from './listBooks'
import { Div, H2 } from './styled-components/styleCategoryBooks'

type Props = {
  category: string,
  highlight?: boolean
}

const CategoryBooks: FunctionComponent<Props> = ({ category, highlight = false }: Props) => {
  return (
    <Div highlight={highlight}>
      <H2 highlight={highlight}>{category}</H2>
      <ListBooks highlight={highlight} term={category} />
    </Div>
  )
}

export default CategoryBooks
