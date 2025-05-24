import { Link } from 'react-router'
import SearchForm from '@components/SearchForm.jsx'
import { BookmarkIcon, ArrowLeftIcon } from '@heroicons/react/24/outline/index.js'
import { useNavigate } from 'react-router'

function Header() {
  const navigate = useNavigate()
  return (
    <header className="2xs:px-6 2xs:py-4 border-b-2 border-gray-300 bg-white p-3">
      <div className="flex h-8 w-full items-center justify-between gap-x-3 xl:mx-auto xl:max-w-7xl">
        <ArrowLeftIcon className="text-primary size-6" onClick={() => navigate(-1)} />
        <div className="flex flex-auto flex-row-reverse items-center gap-x-2">
          <Link to="/bookmarks" className="block">
            <BookmarkIcon className="text-primary hover:fill-primary size-6 fill-transparent transition-colors duration-400 ease-in-out" />
          </Link>
          <SearchForm />
        </div>
      </div>
    </header>
  )
}

export default Header
