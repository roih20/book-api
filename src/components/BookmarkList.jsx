import Book from '@components/Book.jsx'
import { useEffect, useState } from 'react'

function BookmarkList() {
  const [books, setBooks] = useState([])

  function loadBookmarks() {
    try {
      const bookmarks = JSON.parse(localStorage.getItem('books') || '[]')
      setBooks(bookmarks)
    } catch (e) {
      console.error(e)
      setBooks([])
    }
  }

  useEffect(() => {
    loadBookmarks()

    window.addEventListener('bookmarkUpdated', () => loadBookmarks())

    return () => window.removeEventListener('bookmarkUpdated', () => loadBookmarks())
  }, [])

  return (
    <ul className="grid grid-cols-1 gap-y-4 sm:grid-cols-3 sm:gap-x-4 md:grid-cols-4 lg:grid-cols-5">
      {books.length > 0 &&
        books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            authors={book.authors}
            publishedDate={book.publishedDate}
            thumbnail={book.thumbnail}
          />
        ))}
    </ul>
  )
}

export default BookmarkList
