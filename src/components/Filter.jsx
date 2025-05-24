import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline/index.js'

function Filter({ setFilterPanel }) {
  return (
    <div className="2md:hidden my-3 inline-block">
      <button
        onClick={() => setFilterPanel(true)}
        className="bg-primary flex items-center gap-x-1.5 rounded-lg px-2.5 py-1.5 hover:cursor-pointer">
        <AdjustmentsHorizontalIcon className="xs:w-5 h-auto w-4 text-white" />
        <span className="xs:text-base text-sm text-white">Sort and filter</span>
      </button>
    </div>
  )
}

export default Filter
