import { BasicProps } from 'interfaces/components/BasicProps'

export const DataMessage = <Props extends BasicProps>(
  {
    children
  }: Props
) => (
  <div className="w-fit p-2 rounded-md place-self-center bg-neutral-800">
    <p className="text-center text-gray-600">{children}</p>
  </div>
)