function RadioButton({ label, name, value, defaultChecked }) {
  return (
    <label className="flex items-center gap-x-2">
      <div className="grid place-items-center">
        <input
          type="radio"
          value={value}
          name={name}
          defaultChecked={defaultChecked}
          className="peer border-primary col-start-1 row-start-1 h-5 w-5 appearance-none rounded-full border bg-white"
        />
        <div className="peer-checked:bg-primary col-start-1 row-start-1 h-2.5 w-2.5 rounded-full bg-white transition-colors duration-500"></div>
      </div>
      <span className="2md:text-gray-900 text-gray-700">{label}</span>
    </label>
  )
}

export default RadioButton
