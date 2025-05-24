import Book from '@components/Book.jsx'
import useBooks from '@hooks/useBooks.js'
import Filter from '@components/Filter.jsx'
import Pagination from '@components/Pagination.jsx'
import { ArrowPathIcon } from '@heroicons/react/24/outline/index.js'

function BookList({ setFilterPanel }) {
  const { books, loading } = useBooks()

  if (books.length < 1) return null

  return (
    <section className="2md:col-span-2 lg:col-span-3">
      {loading ? (
        <div className="2xs:h-[32rem] 2md:h-[28rem] flex h-96 items-center justify-center 2xl:h-[26rem]">
          <ArrowPathIcon className="text-primary xs:size-10 size-8 animate-spin xl:size-12" />
        </div>
      ) : (
        <>
          <Filter setFilterPanel={setFilterPanel} />
          <ul className="2md:grid-cols-3 grid grid-cols-1 gap-y-4 sm:grid-cols-3 sm:gap-x-4 md:grid-cols-4 md:gap-x-3 lg:grid-cols-4">
            {books.map((book) => (
              <Book
                key={book.id}
                title={book.volumeInfo.title}
                id={book.id}
                authors={book.volumeInfo?.authors}
                thumbnail={book.volumeInfo?.imageLinks?.thumbnail}
                publishedDate={book.volumeInfo?.publishedDate}
              />
            ))}
          </ul>
          <Pagination />
        </>
      )}
    </section>
  )
}

export default BookList
