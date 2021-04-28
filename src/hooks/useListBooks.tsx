import { useEffect, useState } from "react"

function useListBooks(term: string) {
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
