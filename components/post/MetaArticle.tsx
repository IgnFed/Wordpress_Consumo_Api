import { BasicProps } from "interfaces/components/BasicProps.interface"
import { HTMLAttributes } from "react"

interface MetaArticleProps extends BasicProps {
  spanClassName?: HTMLAttributes<HTMLSpanElement>["className"]
}

export default function MetaArticle<Props extends MetaArticleProps>(
  {
    children,
    spanClassName
  }: Props
){
  return (
    <div className="border-l-gray-700 border-l-[.2rem]">
      <span className={`text-xs text-gray-400 ml-[1rem] ${spanClassName}`}>
      {children}
      </span>
    </div>
  )
}