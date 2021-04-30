import { SearchContext } from 'pages/search'
import React, { FunctionComponent, useContext } from 'react'
import { IoMdClose } from 'react-icons/io'
import { Div, FilterNow, H1, InputBox, Span } from 'styled-components/styledFilterWindow'

const FilterButton: FunctionComponent = () => {
  const searchContext = useContext(SearchContext)

  const closeFilter = () => {
    searchContext.dispatch({ type: 'TOGGLE_FILTER'})
  }

  return (
    <>
      <Div>
        <Span>Filtrar:</Span>
        <IoMdClose size="16pt" onClick={closeFilter}/>
      </Div>
      <div>
        <H1>Preço</H1>
        <InputBox>
          <input type="checkbox" id="price-1"/>
          <label htmlFor="price-1">De R$0 até R$10</label>
        </InputBox>
        <InputBox>
          <input type="checkbox" id="price-2"/>
          <label htmlFor="price-2">De R$11 até R$20</label>
        </InputBox>
        <InputBox>
          <input type="checkbox" id="price-3"/>
          <label htmlFor="price-3">De R$21 até R$30</label>
        </InputBox>
        <InputBox>
          <input type="checkbox" id="price-4"/>
          <label htmlFor="price-4">Mais de R$30</label>
        </InputBox>
      </div>

      <div>
        <H1>Disponibilidade para venda</H1>
        <InputBox>
          <input type="checkbox" id="available"/>
          <label htmlFor="available">Disponível</label>
        </InputBox>
        <InputBox>
          <input type="checkbox" id="not-available"/>
          <label htmlFor="not-available">Não disponível</label>
        </InputBox>
      </div>

      <div>
        <H1>Formatos disponíveis</H1>
        <InputBox>
          <input type="checkbox" id="epub"/>
          <label htmlFor="epub">Epub</label>
        </InputBox>
        <InputBox>
          <input type="checkbox" id="pdf"/>
          <label htmlFor="pdf">PDF</label>
        </InputBox>
      </div>

      <FilterNow>Filtrar Agora</FilterNow>
    </>
  )
}

export default FilterButton
