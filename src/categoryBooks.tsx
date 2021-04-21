import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import ListBooks from './listBooks'

type Props = {
  category: string
}

export const H2 = styled.h2`
  color: #2D2D2E;
`

const CategoryBooks: FunctionComponent<Props> = ({ category }: Props) => {
  return (
    <>
      <H2>{category}</H2>
      <ListBooks term={category} />
    </>
  )
}

export default CategoryBooks
