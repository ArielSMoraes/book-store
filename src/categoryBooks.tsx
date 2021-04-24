import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import ListBooks from './listBooks'

type Props = {
  category: string,
  highlight?: boolean
}

const H2 = styled.h2<{highlight: boolean}>`
  color: ${props => props.highlight ? "white" : "#2D2D2E"}
`

const Div = styled.div<{highlight: boolean}>`
  margin: 32pt 0;

  ${props => props.highlight ? `
    padding: 17pt;
    margin: 32pt -17pt;
    background-color: #47B7ED;
  ` : ''};
`

const CategoryBooks: FunctionComponent<Props> = ({ category, highlight = false }: Props) => {
  return (
    <Div highlight={highlight}>
      <H2 highlight={highlight}>{category}</H2>
      <ListBooks highlight={highlight} term={category} />
    </Div>
  )
}

export default CategoryBooks
