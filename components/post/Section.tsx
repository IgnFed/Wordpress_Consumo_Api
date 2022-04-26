import { BasicProps } from "interfaces/components/BasicProps.interface";
import { HTMLAttributes } from "react";

interface SectionProps extends BasicProps {
  title: string,
  className?: HTMLAttributes<HTMLElement>["className"],
  titleAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

interface TitleTagProps extends BasicProps {
  className?: SectionProps["className"],
  as: SectionProps["titleAs"],
}

const FONT_SIZES = {
  h1: "2.5rem",
  h2: "2rem",
  h3: "1.5rem",
  h4: "1.25rem",
  h5: "1rem",
  h6: "0.75rem",
}

const TitleTag = <Props extends TitleTagProps>(
  {
    children,
    className,
    as,
  }: Props
) => {
  // make h1, h2... font size
  if (as === "h1") return <h1 className={`text-blue-800 text-4xl ${className}`}>{children}</h1>
  if (as === "h2") return <h2 className={`text-blue-800 text-2xl ${FONT_SIZES[as]} ${className}`}>{children}</h2>
  if (as === "h3") return <h3 className={`text-blue-800 text-xl ${FONT_SIZES[as]} ${className}`}>{children}</h3>
  if (as === "h4") return <h4 className={`text-blue-800 text-lg ${FONT_SIZES[as]} ${className}`}>{children}</h4>
  if (as === "h5") return <h5 className={`text-blue-800 text-lg ${FONT_SIZES[as]} ${className}`}>{children}</h5>
  if (as === "h6") return <h6 className={`text-blue-800 text-lg ${FONT_SIZES[as]} ${className}`}>{children}</h6>
  return <></>
}

export default function Section<Props extends SectionProps>(
  {
    children,
    title,
    className = "",
    titleAs = "h2"
  }: Props
) {
  return (
    <section className={className}>
      <TitleTag as={titleAs} >
        {title}
      </TitleTag>
      {children}
    </section>
  )
}
