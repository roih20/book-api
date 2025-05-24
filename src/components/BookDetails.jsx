function BookDetails({ title, image, authors, publishedDate, description }) {
  return (
    <div className="flex flex-col lg:mx-auto lg:max-w-5xl">
      <div className="xs:flex-row xs:gap-y-0 xs:gap-x-4 xs:items-start mb-4 flex flex-col items-center gap-y-2">
        <div className="xs:flex-1 xs:flex xs:flex-col xs:gap-y-1">
          <p className="text-primary xs:text-left xs:text-2xl 2md:text-3xl text-center text-xl font-semibold">
            {title}
          </p>
          {authors && (
            <ul className="xs:justify-normal flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
              {authors.map((author, index) => (
                <li key={index} className="text-primary xs:text-base 2md:text-lg text-sm">
                  {author}
                </li>
              ))}
            </ul>
          )}
          {publishedDate && (
            <p className="xs:text-left xs:text-base 2md:text-lg text-center text-sm">
              {new Date(publishedDate).getFullYear()}
            </p>
          )}
        </div>
        {image && <img src={image} alt="" className="xs:w-32 h-auto w-44 rounded-xl lg:w-36" />}
      </div>
      {description && (
        <div>
          <p className="py-2 font-semibold">About this book</p>
          <p className="xs:text-sm/7 text-xs/7 italic">{description}</p>
        </div>
      )}
    </div>
  )
}

export default BookDetails
