/**
 * @jest-environment jsdom
 */

import { waitFor } from '@testing-library/react'
import fetchMock, { enableFetchMocks } from "jest-fetch-mock"
import React from 'react'
import { render } from "react-dom"
import { act } from "react-dom/test-utils"
import CategoryBooks from '../src/components/categoryBooks'
import { apiResponseMock } from '../src/mocks/apiMock'

enableFetchMocks()

describe('CategoryBooks', () => {
  let container: HTMLDivElement

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    fetchMock.resetMocks()
  })

  afterEach(() => {
    document.body.removeChild(container)
  })

  test('should make a request', async() => {
    fetchMock.mockResponse(JSON.stringify(apiResponseMock(1)))

    act(() => {
      render(<CategoryBooks category='Action' />, container)
    })

    await waitFor(() => {
      expect(fetchMock.mock.calls.length).toEqual(1)
    })
  })

  test('category name is used as title ', async() => {
    fetchMock.mockResponse(JSON.stringify(apiResponseMock(1)))

    await waitFor(() => {
      act(() => {
        render(<CategoryBooks category='Action' />, container)
        expect(document.querySelectorAll('h2').length).toEqual(1)
        expect(document.querySelector('h2')?.textContent).toEqual('Action')
      })
    })
  })

  test('should get books with category in query', async() => {
    fetchMock.mockResponse(JSON.stringify(apiResponseMock(3)))

    act(() => {
      render(<CategoryBooks category='Adventure' />, container)
    })

    await waitFor(() => {
      expect(fetchMock.mock.calls[0][0]).toContain('q=Adventure')
    })
  })
})
