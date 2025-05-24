import { useEffect, useState } from 'react'
import { BookmarkIcon } from '@heroicons/react/24/outline/index.js'

function BookmarkButton({ title, authors, publishedDate, thumbnail, id }) {
  const [isSaved, setIsSaved] = useState(false)

  useEffect(() => {
    try {
      const books = JSON.parse(localStorage.getItem('books')) ?? []
      setIsSaved(books.some((book) => book.id === id))
    } catch (e) {
      console.error(e)
      setIsSaved(false)
    }
  }, [id])

  function toggleBookmark() {
    const books = JSON.parse(localStorage.getItem('books')) ?? []

    if (!isSaved) {
      books.push({ title, authors, publishedDate, thumbnail, id })
      localStorage.setItem('books', JSON.stringify(books))
      setIsSaved(true)
    } else {
      localStorage.setItem('books', JSON.stringify(books.filter((book) => book.id !== id)))
      setIsSaved(false)
      window.dispatchEvent(new Event('bookmarkUpdated'))
    }
  }

  return (
    <button
      className="xs:right-2 xs:bottom-3 absolute right-1 bottom-2 hover:cursor-pointer sm:right-1.5 sm:bottom-2"
      aria-label={isSaved ? 'Saved book' : 'Unsaved Book'}
      onClick={toggleBookmark}>
      <BookmarkIcon
        className={`text-primary size-6 transition-colors duration-400 ${isSaved ? 'fill-primary' : 'fill-transparent'}`}
      />
    </button>
  )
}

export default BookmarkButton
