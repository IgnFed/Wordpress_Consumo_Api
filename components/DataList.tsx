import Image from 'next/image'
import { Data } from "interfaces/DataResponse.interface"
import Link from 'next/link'

const DataItem = <Props extends Data>(
  props: Props
) => {
  const image = props.featured_media && props.featured_media["2048x2048"] || "/public/images/default_image.png"
  return (
    <li className="text-white pt-1 bg-slate-500 rounded-md text-center">
      <Link href='#' passHref>
        <a>
          <Image
            src={image}
            layout="responsive"
            decoding='async'
            loading='lazy'
            width='100%'
            height="100%"
            about={props.slug}
            alt={props.title} />
            
            <span>
              {props.title}
            </span>
        </a>
      </Link>
    </li>
  )
}

interface DataListProps {
  data: Array<Data>
}


export const DataList = <Props extends DataListProps>(
  {
    data,
  }: Props
) => {
  if(!data.length) return <></>
  return (
    <ul className="grid w-full grid-cols-auto-fill place-content-center gap-3" >
      {
        data.map((item: Data, idx: number) => (

          <DataItem key={item.id + idx} {...item} />

        ))
      }
    </ul>
  )
}