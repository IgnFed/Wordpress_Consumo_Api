interface LoaderProps {
  className?: string
}
export default function Loader<Props extends LoaderProps>(
  {
    className=""
  }: Props
) {
  return (
    <span className={`w-10 h-10 animate-waving border-4 border-cyan-900 border-t-cyan-600 rounded-full ${className}`} />
  )
}