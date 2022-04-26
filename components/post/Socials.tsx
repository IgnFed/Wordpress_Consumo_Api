import { AuthorSocialProfiles } from 'interfaces/DataResponse.interface'
import dynamic from 'next/dynamic'

const Link = dynamic(()=> import('next/link'))
interface SocialProps {
  socialsMedia: AuthorSocialProfiles
}

interface SocialItemProp {
  name: "facebook" | "twitter" | "instagram" | "youtube" | "linkedin" | "github" | "pinterest" | "behance" | "dribbble",
  url?: string
}

const SOCIAL_COLOR = {
  facebook: '#3b5998',
  twitter: '#1da1f2',
  instagram: '#e1306c',
  youtube: '#ff0000',
  linkedin: '#0077b5',
  pinterest: '#bd081c',
  github: '#333',
  behance: '#1769ff',
  dribbble: '#ea4c89'
}


const SocialItem = <Props extends SocialItemProp>(
  {
    name,
    url
  }: Props
) => (
  url &&
  (
    <Link href={url} passHref >
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-md inline-block p-3"
        style={{ backgroundColor: SOCIAL_COLOR[name] || "rgb(39,39,42)" }} >
        <span>{name}</span>
      </a>
    </Link>
  )
  ||
  <></>
)

export default function Socials<Props extends SocialProps>(
  {
    socialsMedia = {} as AuthorSocialProfiles,
  }: Props
) {
  return (
    <ul
      className='fixed z-10 w-full sm:relative bg-slate-800 p-2 sm:pr-0
    overflow-x-auto flex sm:justify-start items-center 
    flex-nowrap sm:flex-col sm:items-end top-0 sm:bg-inherit gap-2'
    >
      {
        Object.entries(socialsMedia)
          .map(([key, value]) => {
            return (
              value && <li key={key} >
                <SocialItem name={(key as SocialItemProp["name"])} url={value} />
              </li>
            )
          })
      }
    </ul>
  )

}