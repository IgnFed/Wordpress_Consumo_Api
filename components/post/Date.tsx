import { BasicProps } from "interfaces/components/BasicProps.interface"

export default function MetaArticle<Props extends BasicProps>(
  {
    children,
  }: Props
){
  return (
    <div className="border-l-gray-700 border-l-[.2rem]">
      <p className="text-xs text-gray-400 ml-[1rem]">
      {children}
      </p>
    </div>
  )
}