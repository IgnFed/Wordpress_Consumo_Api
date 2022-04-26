import { BasicProps } from "interfaces/components/BasicProps.interface";

export default function HeadLine<Props extends BasicProps>(
  {
    children
  }: Props
) {
  return (
    <div className="border-l-pink-700 border-l-[.4rem] m-[.5rem_0]">
      <p className="text-xs text-gray-400 ml-[1rem] mt-4">
        {children}
      </p>
    </div>
  )
}