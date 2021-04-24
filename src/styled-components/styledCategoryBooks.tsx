import styled from 'styled-components'

export const H2 = styled.h2<{highlight: boolean}>`
  color: ${props => props.highlight ? "white" : "#2D2D2E"}
`

export const Div = styled.div<{highlight: boolean}>`
  margin: 32pt 0;

  ${props => props.highlight ? `
    padding: 17pt;
    margin: 32pt -17pt;
    background-color: #47B7ED;
  ` : ''};
`
