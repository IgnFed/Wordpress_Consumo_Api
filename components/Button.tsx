import { BasicProps } from "interfaces/components/BasicProps.interface";

type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps extends BasicProps {
  type?: ButtonType
  className?: string
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

export default function Button<Props extends ButtonProps>(
  {
    children,
    className = '',
    type = 'button',
    disabled = false,
    onClick = () => { }
  }: Props
) {

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-gray-700 hover:bg-slate-800 p-2 rounded-md text-gray-100 ${disabled ? 'bg-gray-600' : ""} ${disabled ? 'text-slate-400' : ""} transition-colors ${className}`}
    >
      {children}
    </button>
  )
}