import BookList from '@components/BookList.jsx'
import SortAndFilterPanel from '@components/SortAndFilterPanel.jsx'
import Header from '@components/Header.jsx'
import { useState } from 'react'

function Home() {
  const [filterPanel, setFilterPanel] = useState(false)

  return (
    <>
      <Header />
      <main className="2xs:px-6 2xs:py-4 2md:grid 2md:grid-cols-3 2md:gap-x-4 2md:py-8 px-4 py-2 lg:grid-cols-4 xl:mx-auto xl:max-w-7xl xl:px-0">
        <aside className="">
          <SortAndFilterPanel setFilterPanel={setFilterPanel} filterPanel={filterPanel} />
          {
            /*backdrop filter */
            filterPanel && (
              <div className="fixed top-0 left-0 z-10 min-h-screen min-w-screen bg-slate-900/50"></div>
            )
          }
        </aside>
        <BookList setFilterPanel={setFilterPanel} />
      </main>
    </>
  )
}

export default Home
