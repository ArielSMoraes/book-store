import { useEffect, useState } from "react"
import { Filters } from '../types/Filters'

function useListBooks(term = '', filters?: Filters) {
  const googleApi = 'https://www.googleapis.com/books/v1/volumes'
  const source = `${googleApi}?q=${term}&startIndex=0&maxResults=20`
  const [listBooks, setListBooks] = useState([])

  useEffect(() => {
    fetch(source, { method: "GET" })
      .then(res => res.json())
      .then(response => {
        setListBooks(response.items)
      })
      .catch(error => console.log(error))
  }, [])

  return listBooks
}

export default useListBooks
