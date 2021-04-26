/**
 * @jest-environment jsdom
 */

import { waitFor } from "@testing-library/react"
import fetchMock, { enableFetchMocks } from "jest-fetch-mock"
import React from 'react'
import { render } from "react-dom"
import { act } from "react-dom/test-utils"
import ListBooks from '../src/components/listBooks'
import { bookMock } from '../src/mocks/apiMock'
import { Book } from '../src/types/book'

enableFetchMocks()

describe('ListBooks', () => {
  let container: HTMLDivElement

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    fetchMock.resetMocks()
  })

  afterEach(() => {
    document.body.removeChild(container)
  })

  test('should make render 1 book', async() => {
    const books: Array<Book> = []
    books.push(bookMock('fakeId'))

    act(() => {
      render(<ListBooks books={books} />, container)
    })

    await waitFor(() => {
      expect(container.querySelectorAll('figure').length).toBe(1)
    })
  })

  test('should make render 3 books', async() => {
    const books: Array<Book> = []
    books.push(bookMock('fakeId1'))
    books.push(bookMock('fakeId2'))
    books.push(bookMock('fakeId3'))

    act(() => {
      render(<ListBooks books={books} />, container)
    })

    await waitFor(() => {
      expect(container.querySelectorAll('div > figure').length).toBe(3)
    })
  })
})
