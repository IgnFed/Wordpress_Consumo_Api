import Image from 'next/image'
import Link from 'next/link'
import { FiltredDataResponse } from 'interfaces/hooks/useApi.interface'

const DataItem = <Props extends FiltredDataResponse & {idx:number}>(
  props: Props,
) => {
  const image = props.featured_media && props.featured_media["2048x2048"] || "/public/images/default_image.png"
  return (
    <li className="text-white pt-1 bg-slate-500 rounded-md text-center">
      <Link href={`/posts/${props.id}`} passHref>
        <a>
          <Image
            src={image}
            layout="responsive"
            decoding='async'
            loading={props.idx === 0 ? 'eager' : 'lazy'}
            width='100%'
            priority={props.idx === 0 ? true : false}
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
  data: Array<FiltredDataResponse>
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
        data.map((item, idx) => (

          <DataItem key={item.id} {...item} idx={idx} />

        ))
      }
    </ul>
  )
}