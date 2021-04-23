/**
 * @jest-environment jsdom
 */

import { waitFor } from '@testing-library/react'
import { enableFetchMocks } from "jest-fetch-mock"
import React from 'react'
import { render } from "react-dom"
import { act } from "react-dom/test-utils"
import CategoryBooks from '../src/categoryBooks'
import { apiResponseMock } from '../src/mocks/apiMock'

enableFetchMocks()

describe('CategoryBooks', () => {
  let container: HTMLDivElement

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    fetchMock.mockResponse(JSON.stringify(apiResponseMock(1)))
  })

  afterEach(() => {
    document.body.removeChild(container)
  })

  test('category name is used as title ', async() => {
    await waitFor(() => {
      act(() => {
        render(<CategoryBooks category='Action' />, container)
        expect(document.querySelectorAll('h2').length).toEqual(1)
        expect(document.querySelector('h2')?.textContent).toEqual('Action')
      })
    })
  })
})
