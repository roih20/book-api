import RadioButton from '@components/RadioButton.jsx'
import { XMarkIcon } from '@heroicons/react/24/outline/index.js'
import { useLocation, useSearchParams, replace } from 'react-router'

function SortAndFilterPanel({ setFilterPanel, filterPanel }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation()

  function handleSortAndFilter(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const sort = formData.get('sortBy').toString()
    const filter = formData.get('filterBy').toString()
    searchParams.set('filter', filter)
    searchParams.set('orderBy', sort)
    searchParams.set('index', '0')
    setSearchParams(searchParams)
    replace(`${location.pathname}?${searchParams.toString()}`)
    setFilterPanel(false)
  }

  return (
    <form
      onSubmit={handleSortAndFilter}
      className={`2xs:max-w-xs 2xs:min-w-xs fixed top-0 left-0 z-20 flex h-full max-w-2xs min-w-2xs flex-col bg-white transition-transform duration-400 ease-in-out ${filterPanel ? 'translate-x-0' : '-translate-x-full'} 2md:translate-x-0 2md:h-auto 2md:relative 2md:transition-none 2md:z-0 2md:border 2md:min-w-auto 2md:rounded-xl 2md:border-gray-400`}>
      <div className="flex items-center justify-between border-b border-gray-300 px-3 py-4">
        <div className="text-primary text-lg font-semibold">Sort and filter</div>
        <button
          type="button"
          className="2md:hidden rounded-full p-1 hover:cursor-pointer hover:bg-gray-100"
          onClick={() => setFilterPanel(false)}>
          <XMarkIcon className="text-primary h-auto w-6" />
        </button>
      </div>
      <div className="border-b border-gray-300">
        <div className="text-primary px-3 pt-3.5 pb-1.5 text-lg font-semibold">Sort</div>
        <ul className="flex flex-col gap-y-3.5 px-3 pt-3 pb-5">
          <li>
            <RadioButton label="Date: Recent books" name="sortBy" value="newest" />
          </li>
          <li>
            <RadioButton
              label="Popular: Relevant books"
              name="sortBy"
              value="relevance"
              defaultChecked={true}
            />
          </li>
        </ul>
      </div>
      <div className="">
        <div className="text-primary px-3 pt-3.5 pb-1.5 text-lg font-semibold">Filter</div>
        <ul className="flex flex-col gap-y-3.5 px-3 pt-3 pb-5">
          <li>
            <RadioButton label="Ebooks" name="filterBy" value="ebooks" defaultChecked={true} />
          </li>
          <li>
            <RadioButton label="Free ebooks" name="filterBy" value="free-ebooks" />
          </li>
          <li>
            <RadioButton label="Paid ebooks" name="filterBy" value="paid-ebooks" />
          </li>
        </ul>
      </div>
      <div className="h-full"></div>
      <div className="px-7 py-2">
        <button className="bg-primary w-full rounded-xl px-4 py-2 text-lg font-semibold text-white hover:cursor-pointer">
          Show results
        </button>
      </div>
    </form>
  )
}

export default SortAndFilterPanel
