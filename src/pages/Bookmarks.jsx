import Header from '@components/Header.jsx'
import BookmarkList from '@components/BookmarkList.jsx'

function Bookmarks() {
  return (
    <>
      <Header label="Bookmarks" />
      <section className="2md:py-8 px-4 py-6 xl:mx-auto xl:max-w-7xl xl:px-0">
        <BookmarkList />
      </section>
    </>
  )
}

export default Bookmarks
