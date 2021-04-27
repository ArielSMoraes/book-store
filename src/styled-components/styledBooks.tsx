import styled from 'styled-components'

export const Img = styled.img`
  margin-bottom: 10pt;
  width: 100%;
`

export const Figure = styled.figure<{wrap: boolean}>`
  width: 30%;
  min-width: 30%;
  margin: ${props => props.wrap ? "0 8pt 17pt 0" : " 0 15pt 0 0"};
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  text-align: center;
  overflow: hidden;
`

export const BooksBox = styled.div<{highlight: boolean}>`
  color: ${props => props.highlight ? "white" : "#595A5C"};
  display: flex;
  overflow: scroll;
  align-items: baseline;
`

export const FigCaption = styled.figcaption`
  height: 40px;
  overflow: hidden;
`
