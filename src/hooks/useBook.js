import { useEffect, useState } from 'react'
import { getBook } from '@api/booksAPI.js'

function useBook(id) {
  const [book, setBook] = useState({})

  useEffect(() => {
    if (id) {
      getBook(id)
        .then((result) => {
          setBook(result)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [id])

  return book
}

export default useBook
