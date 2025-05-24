import { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline/index.js'
import { redirect, replace, useLocation, useSearchParams, useNavigate } from 'react-router'

function SearchForm() {
  const [error, setError] = useState('')
  const regex = /^[A-Za-z0-9 ]+$/
  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation()
  const navigate = useNavigate()
  const currentQuery = searchParams.get('q') || ''

  function handleSearch(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const query = formData.get('query').toString()

    if (!query) {
      setError('Empty query')
      return
    } else if (!regex.test(query)) {
      setError('Invalid query')
      return
    }

    setError('')
    searchParams.set('q', query)
    setSearchParams(searchParams)

    if (location.pathname === '/') {
      replace(`${location.pathname}?${searchParams.toString()}`)
    } else {
      navigate(`/?${searchParams.toString()}`)
    }
  }

  return (
    <form
      onSubmit={handleSearch}
      className="xs:max-w-xs xs:transition-none xs:focus-within:max-w-xs relative max-w-6 flex-1 transition-[max-width] duration-400 ease-in-out focus-within:max-w-full xl:max-w-sm xl:focus-within:max-w-sm"
      noValidate>
      <input
        name="query"
        type="text"
        placeholder="Search book"
        defaultValue={currentQuery}
        className="focus:text-primary xs:text-primary xs:rounded-full xs:border xs:border-gray-700 xs:px-3 xs:py-1.5 xs:placeholder:text-slate-600 block w-full p-1 text-transparent placeholder:text-transparent focus:border-b focus:outline-none focus:placeholder:text-slate-500"
        required
      />
      <button
        type="button"
        className="xs:right-3 pointer-events-none absolute top-1/2 right-1 translate-x-1 -translate-y-1/2">
        <MagnifyingGlassIcon className="text-primary size-6" />
      </button>
    </form>
  )
}

export default SearchForm
