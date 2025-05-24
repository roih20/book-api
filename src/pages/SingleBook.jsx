import Header from '@components/Header.jsx'
import { useParams } from 'react-router'
import useBook from '@hooks/useBook.js'
import BookDetails from '@components/BookDetails.jsx'

function SingleBook() {
  const params = useParams()
  const book = useBook(params.id)

  return (
    <>
      <Header />
      <main className="p-6 md:py-8">
        {book?.volumeInfo && (
          <BookDetails
            title={book.volumeInfo.title}
            authors={book.volumeInfo?.authors}
            image={book.volumeInfo?.imageLinks?.thumbnail}
            description={book.volumeInfo?.description.replace(/<[^>]*>/g, '')}
            publishedDate={book.volumeInfo?.publishedDate}
          />
        )}
      </main>
    </>
  )
}

export default SingleBook
