/**
 * @jest-environment jsdom
 */

import { act, fireEvent, render, screen } from "@testing-library/react"
import { enableFetchMocks } from "jest-fetch-mock"
import React from 'react'
import FilterButton from "../src/components/filterButton"
import { SearchContext } from '../src/pages/search'
import { initialFilterState } from '../src/reducers/filterReducer'

enableFetchMocks()

describe('FilterButton', () => {
  let container: HTMLDivElement

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    document.body.removeChild(container)
  })

  test('should make render 1 book', async() => {
    const dispatch = jest.fn()

    act(() => {
      render(
        <SearchContext.Provider value={{state: initialFilterState, dispatch}}>
          <FilterButton />
        </SearchContext.Provider>
      )
      fireEvent.click(screen.getByTestId('toggleFilter'))

    })

    expect(dispatch).toHaveBeenCalledWith({type: 'TOGGLE_FILTER'})
  })
})
