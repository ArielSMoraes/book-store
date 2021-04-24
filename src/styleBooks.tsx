import styled from 'styled-components'

export const Img = styled.img`
  height: 138pt;
  margin-bottom: 10pt;
`

export const Figure = styled.figure`
  width: 94pt;
  min-width: 94pt;
  margin: 0;
  margin-right: 15pt;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  text-align: center;
  overflow: hidden;
`

export const BooksBox = styled.div<{highlight: boolean}>`
  color: ${props => props.highlight ? "white" : "#595A5C"};
  display: flex;
  overflow: scroll;
`

export const FigCaption = styled.figcaption`
  height: 40px;
  overflow: hidden;
`
