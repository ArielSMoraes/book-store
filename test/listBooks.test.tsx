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
    fetchMock.mockResponseOnce(JSON.stringify({
      items: [{
        "id": "UBR6DwAAQBAJ",
        "volumeInfo": {
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=UBR6DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=UBR6DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "title": "Sonho Ou Aventura"
        }
      }],
      kind: "books#volumes",
      totalItems: 1445
    }))

    act(() => {
      render(<ListBooks term='Action' />, container)
    })

    await waitFor(() => {
      expect(fetchMock.mock.calls.length).toEqual(1)
    })
  })
})
