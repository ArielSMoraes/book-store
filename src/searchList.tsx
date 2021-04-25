import React, { FunctionComponent } from 'react'
import { useParams } from "react-router-dom"

const SearchList: FunctionComponent = () => {
  const { term } = useParams()

  return (
    <div>
      ID - {term}
    </div>
  )
}

export default SearchList
