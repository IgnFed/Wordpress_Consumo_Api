
interface InputProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

export const Input = <Props extends InputProps>(
  {
    handleChange,
    value
  }: Props
) => {
  return (
    <label htmlFor="searcher" className=" w-full sm:w-9/12 flex flex-col items-center" >
      <span>Search</span>
      <input
        type="text"
        id="searcher"
        name="searcher"
        className="placeholder:text-slate-300 text-black w-full max-w-lg font-bold border-none outline-none rounded-md p-3"
        onChange={handleChange}
        value={value} />
    </label>
  )
}