/**
 * @jest-environment jsdom
 */

import { waitFor } from "@testing-library/react"
import fetchMock, { enableFetchMocks } from "jest-fetch-mock"
import React from 'react'
import { render } from "react-dom"
import { act } from "react-dom/test-utils"
import ListBooks from '../src/listBooks'

enableFetchMocks()

describe('ListBooks', () => {
  let container: HTMLDivElement

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    document.body.removeChild(container)
  })

  test('should make a request on', async() => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    fetchMock.mockResponse(JSON.stringify(apiMock(1)))

    act(() => {
      render(<ListBooks term='Action' />, container)
    })

    await waitFor(() => {
      expect(fetchMock.mock.calls.length).toEqual(1)
    })
  })

  test('should make render 3 books', async() => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    fetchMock.mockResponse(JSON.stringify(apiMock(3)))

    act(() => {
      render(<ListBooks term='Action' />, container)
    })

    await waitFor(() => {
      expect(container.querySelectorAll('figure').length).toBe(3)
    })
  })

  test('should get books with term in query', async() => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    fetchMock.mockResponse(JSON.stringify(apiMock(3)))

    act(() => {
      render(<ListBooks term='Action' />, container)
    })

    await waitFor(() => {
      expect(fetchMock.mock.calls[0][0]).toContain('q=Action')
    })
  })
})

function apiMock(count: number) {
  const items = []
  for (let index = 0; index < count; index++) {
    items.push(bookMock(index))
  }

  return {
    items,
    kind: "books#volumes",
    totalItems: 1445
  }
}

function bookMock(id: number) {
  return {
    id,
    "volumeInfo": {
      "imageLinks": {
        "smallThumbnail": `smallthumbOf${id}`,
        "thumbnail": `thumbOf${id}`
      },
      "title": `Title of ${id}`
    }
  }
}
