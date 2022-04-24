import { BasicProps } from "interfaces/components/BasicProps"

interface InputProps extends BasicProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  id: string
  name: string
  placeholder?: string
  type?: string
}

export const Input = <Props extends InputProps>(
  {
    handleChange,
    value,
    id,
    name,
    children,
    placeholder,
    type = 'text'
  }: Props
) => {
  return (
    <label htmlFor={id} className=" w-full sm:w-9/12 flex flex-col items-center" >
      <span>{children}</span>
      <input
        type={type}
        id={id}
        name={name}
        className="placeholder:text-slate-300 text-black w-full max-w-lg font-bold border-none outline-none rounded-md p-3"
        onChange={handleChange}
        value={value} 
        placeholder={placeholder}
        />
    </label>
  )
}