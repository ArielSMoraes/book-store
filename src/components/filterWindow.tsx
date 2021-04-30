import { SearchContext } from 'pages/search'
import React, { FunctionComponent, useContext, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { Div, FilterNow, H1, InputBox, Span } from 'styled-components/styledFilterWindow'

const FilterButton: FunctionComponent = () => {
  const [filterPrice, setFilterPrice] = useState<string>('')
  const [filterAvailable, setFilterAvailable] = useState<boolean | null>(null)
  const [filterEpub, setFilterEpub] = useState<boolean | null>(null)
  const [filterPdf, setFilterPdf] = useState<boolean | null>(null)
  const searchContext = useContext(SearchContext)

  const closeFilter = () => {
    searchContext.dispatch({ type: 'TOGGLE_FILTER'})
  }

  const onChangePrice = (event: { target: { value: string } }) => {
    setFilterPrice(event.target.value)
  }

  const onChangeAvailable = (event: { target: { value: string } }) => {
    setFilterAvailable(event.target.value === 'true')
  }

  const onChangeEpub = (event: { target: { checked: boolean } }) => {
    setFilterEpub(event.target.checked)
  }

  const onChangePdf = (event: { target: { checked: boolean } }) => {
    setFilterPdf(event.target.checked)
  }

  const applyFilters = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    searchContext.dispatch({
      payload: {
        apply: true,
        available: filterAvailable,
        epub: filterEpub,
        pdf: filterPdf,
        price: filterPrice
      },
      type: 'APPLY_FILTER'
    })
    searchContext.dispatch({ type: 'TOGGLE_FILTER'})
  }

  return (
    <form onSubmit={applyFilters}>
      <Div>
        <Span>Filtrar:</Span>
        <IoMdClose data-testid='close-filter' size="16pt" onClick={closeFilter} />
      </Div>
      <div>
        <H1>Preço</H1>
        <InputBox>
          <input
            data-testid='first-price'
            type="radio"
            id="price-1"
            name="price"
            value='0-10'
            onChange={onChangePrice}
          />
          <label htmlFor="price-1">De R$0 até R$10</label>
        </InputBox>
        <InputBox>
          <input
            type="radio"
            id="price-2"
            name="price"
            value='11-20'
            onChange={onChangePrice}
          />
          <label htmlFor="price-2">De R$11 até R$20</label>
        </InputBox>
        <InputBox>
          <input
            type="radio"
            id="price-3"
            name="price"
            value='21-30'
            onChange={onChangePrice}
          />
          <label htmlFor="price-3">De R$21 até R$30</label>
        </InputBox>
        <InputBox>
          <input
            type="radio"
            id="price-4"
            name="price"
            value='30+'
            onChange={onChangePrice}
          />
          <label htmlFor="price-4">Mais de R$30</label>
        </InputBox>
      </div>

      <div>
        <H1>Disponibilidade para venda</H1>
        <InputBox>
          <input
            data-testid='first-available'
            type="radio"
            id="available"
            name="available"
            value='true'
            onChange={onChangeAvailable}
          />
          <label htmlFor="available">Disponível</label>
        </InputBox>
        <InputBox>
          <input
            type="radio"
            id="not-available"
            name="available"
            value='false'
            onChange={onChangeAvailable}
          />
          <label htmlFor="not-available">Não disponível</label>
        </InputBox>
      </div>

      <div>
        <H1>Formatos disponíveis</H1>
        <InputBox>
          <input
            data-testid='epub'
            type="checkbox"
            id="epub"
            name="epub"
            onChange={onChangeEpub}
          />
          <label htmlFor="epub">Epub</label>
        </InputBox>
        <InputBox>
          <input type="checkbox" id="pdf" name="pdf" onChange={onChangePdf}/>
          <label htmlFor="pdf">PDF</label>
        </InputBox>
      </div>

      <FilterNow data-testid="apply-filter">Filtrar Agora</FilterNow>
    </form>
  )
}

export default FilterButton
