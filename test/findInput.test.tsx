/**
 * @jest-environment jsdom
 */

import { getByTestId } from '@testing-library/react'
import React from 'react'
import { render } from "react-dom"
import { act, Simulate } from "react-dom/test-utils"
import FindInput from '../src/components/findInput'

const mockHistoryPush = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush
  })
}))

describe("Search", () => {
  let container: HTMLDivElement

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    document.body.removeChild(container)
  })

  it("Should render the search inactive", () => {
    act(() => {
      render(<FindInput />, container)
    })

    expect(getByTestId(document.documentElement, 'logo')).toBeInTheDocument()
  })

  it("Should render the search active", () => {
    act(() => {
      render(<FindInput />, container)
    })

    act(() => {
      //TODO: Simulate click expect only a HTML element and not a possible null,
      //search for another solution
      const searchIcon = container.querySelector("[data-testid='search-icon']") || document.createElement('div')

      Simulate.click(searchIcon)
    })

    expect(getByTestId(document.documentElement, 'search-input')).toBeInTheDocument()
  })
})
