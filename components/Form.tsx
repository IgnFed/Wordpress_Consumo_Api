import { BasicProps } from "interfaces/components/BasicProps.interface"

interface FormProps extends BasicProps {
  submitEvent: (e: React.FormEvent<HTMLFormElement>) => void
}

export const Form = <Props extends FormProps>(
  {
    children,
    submitEvent
  }: Props
) => {
  return (
    <form className="w-10/12 flex flex-col justify-self-center items-center gap-4 sm:w-full" onSubmit={submitEvent}>
      {children}
    </form>
  )
}

