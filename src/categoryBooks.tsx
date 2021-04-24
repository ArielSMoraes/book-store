import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import ListBooks from './listBooks'

type Props = {
  category: string,
  highlight?: boolean
}

const H2 = styled.h2`
  color: #2D2D2E;
`

const Div = styled.div<{highlight: boolean}>`
  ${props => props.highlight ? `
    padding: 17pt;
    margin: -17pt;
    background-color: #47B7ED;
  ` : ''};
`

const CategoryBooks: FunctionComponent<Props> = ({ category, highlight = false }: Props) => {
  return (
    <Div highlight={highlight}>
      <H2>{category}</H2>
      <ListBooks term={category} />
    </Div>
  )
}

export default CategoryBooks
