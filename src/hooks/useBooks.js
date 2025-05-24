import { useState, useEffect } from 'react'
import { fetchBooks } from '@api/booksAPI.js'
import { useSearchParams } from 'react-router'

function useBooks() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const query = searchParams.get('q') || ''
    const index = Number(searchParams.get('index')) || 0
    const filter = searchParams.get('filter') || 'ebooks'
    const orderBy = searchParams.get('orderBy') || 'relevance'
    setLoading(true)

    if (query) {
      fetchBooks(query, index, filter, orderBy)
        .then((result) => {
          if (result.items) {
            setBooks(result.items)
            setLoading(false)
          } else {
            console.log('Could not find books')
            setLoading(false)
          }
        })
        .catch((error) => console.error(error))
    }
  }, [searchParams])

  return { books, loading }
}

export default useBooks
