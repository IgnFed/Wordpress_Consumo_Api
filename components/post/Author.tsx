import Image from "./Image"

interface AuthorProps {
  name: string,
  avatar: string,
}

export default function Author<Props extends AuthorProps>(
  {
    name,
    avatar
  }: Props
) {
  return (
    <>
      {name}
      <div className="w-10 h-10 rounded-full overflow-hidden" >
        <Image src={avatar} alt="Author Picture" layout="intrinsic" />
      </div>
    </>
  )
}