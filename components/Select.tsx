import { BasicProps } from "interfaces/components/BasicProps.interface"

interface SelectProps extends BasicProps {
  name: string
  required?: boolean,
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function Select<Props extends SelectProps>(
  {
    children,
    name,
    required,
    onChange
  }: Props
) {

  return (
    <select onChange={onChange} className="text-black p-2 rounded-md" name={name} required={required} >
      {children}
    </select>
  )
}