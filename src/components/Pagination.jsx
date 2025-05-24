import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline/index.js'
import { replace, useLocation, useSearchParams } from 'react-router'

function Pagination() {
  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation()
  let currentIndex = Number(searchParams.get('index')) || 0
  const currentResults = Number(searchParams.get('maxResults')) || 10

  function handleNextPage() {
    currentIndex += currentResults
    searchParams.set('index', currentIndex.toString())
    setSearchParams(searchParams)
    replace(`${location.pathname}${searchParams.toString()}`)
  }

  function handlePrevPage() {
    currentIndex -= currentResults
    searchParams.set('index', currentIndex.toString())
    setSearchParams(searchParams)
    replace(`${location.pathname}${searchParams.toString()}`)
  }

  function handlePageChange(method) {
    if (method === 'next') {
      handleNextPage()
    } else if (method === 'prev' && currentIndex >= 10) {
      handlePrevPage()
    }
  }

  return (
    <div className="flex items-center justify-around py-5">
      <button
        onClick={() => handlePageChange('prev')}
        disabled={currentIndex === 0}
        className="bg-primary flex items-center gap-x-2 rounded-lg px-3 py-1 hover:cursor-pointer disabled:cursor-not-allowed">
        <ArrowLeftIcon className="h-auto w-5 text-white" />
        <span className="text-white">Back</span>
      </button>
      <button
        onClick={() => handlePageChange('next')}
        className="bg-primary flex items-center gap-x-2 rounded-lg px-3 py-1 hover:cursor-pointer">
        <span className="text-white">Next</span>
        <ArrowRightIcon className="h-auto w-5 text-white" />
      </button>
    </div>
  )
}

export default Pagination
