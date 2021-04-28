import styled from "styled-components"

export const HeaderWrapper = styled.div<{blue: boolean}>`
  background-color: ${props => props.blue ? "white" : "#EFFAFF"};
  box-shadow: ${props => props.blue ? "0pt 3pt 10pt -8pt #000" : "none"};
  height: 22pt;
  display: flex;
  padding: 17pt;
  margin: -17pt;
  margin-bottom: 40pt;
  justify-content: space-between;
  align-items: center;
`

export const Img = styled.img`
  height: 22pt;
`

export const Input = styled.input`
  width: 100%;
  border: none;
  height: 30px;
  font-size: 14pt;
  color: #B2B4B9;
  padding-right: 8px;

  &:focus {
    outline: none;
  }
`

export const BooksBoxSearch = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
`

export const Text = styled.span`
  width: 100%;
  text-align: center;
`
