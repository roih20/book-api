import BookmarkButton from '@components/BookmarkButton.jsx'
import { Link } from 'react-router'
function Book({ title, authors, publishedDate, thumbnail, id }) {
  return (
    <li className="flex flex-row rounded-xl border border-gray-400 sm:flex-col">
      {thumbnail ? (
        <img
          src={thumbnail}
          alt=""
          className="2xs:h-48 2xs:w-36 h-fit w-28 rounded-xl sm:h-60 sm:w-full md:h-64 md:w-auto"
        />
      ) : (
        <div className="flex h-40 w-28 items-center rounded-l-xl border-r border-gray-300 bg-white">
          <span className="text-primary block p-2 text-center">No image available</span>
        </div>
      )}
      <div className="xs:px-3 relative flex-1 px-2.5 pt-3 sm:px-2 sm:pb-3">
        <Link
          to={`/book/${id}`}
          className="text-primary xs:text-base mb-1 line-clamp-2 text-sm font-semibold text-ellipsis hover:underline sm:text-sm">
          {title}
        </Link>
        {authors && authors.length > 0 && (
          <p className="xs:text-sm mb-1 line-clamp-2 text-xs text-ellipsis sm:mb-2.5 sm:text-xs">
            {authors.join(', ')}
          </p>
        )}
        {publishedDate && (
          <p className="text-primary xs:text-sm text-xs sm:text-xs">
            {new Date(publishedDate).getFullYear()}
          </p>
        )}
        <BookmarkButton
          title={title}
          id={id}
          authors={authors}
          publishedDate={publishedDate}
          thumbnail={thumbnail}
        />
      </div>
    </li>
  )
}

export default Book
