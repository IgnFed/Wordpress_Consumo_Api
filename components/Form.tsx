import { BasicProps } from "interfaces/components/BasicProps"

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
    <form className="from-current w-3/5 flex flex-col items-center max-w-lg gap-4" onSubmit={submitEvent}>
      {children}
    </form>
  )
}

