import Image from 'next/image'
import { DataResponse } from "interfaces/DataResponse"
import Link from 'next/link'



interface DataListProps {
  data: Array<DataResponse>
}


const DataItem = <Props extends DataResponse>(
  props: Props
) => {
  return (
    <li className="text-white bg-slate-500 p-2 rounded-md text-center">
      <Link href='#' passHref>
        <a>
          <Image
            src={props.featured_media['2048x2048']}
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


export const DataList = <Props extends DataListProps>(
  {
    data = [{}] as Array<DataResponse>,
  }: Props
) => {
  return (
    <ul className="grid w-full grid-cols-auto-fill place-content-center gap-3 m-2 sm:mr-6 sm:ml-6" >
      {
        data.map((item: DataResponse, idx: number) => (

          <DataItem key={item.id + idx} {...item} />

        ))
      }
    </ul>
  )
}