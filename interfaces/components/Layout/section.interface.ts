type TwitterCreator = `@${string}`
interface Meta{
  ampUrl: string
  "article:author": string
  "article:publisher": string
  "article:section": string,
  "article:tag": [
    {
      content: string
    }
  ]
  "atomik:ads-provider": string
  "atomik:monetizable": boolean
  canonical: string
  description: string
  "google-site-verification": string
  "og:description": string
  "og:image": string
  "og:image:alt": string
  "og:image:height": number
  "og:image:secure_url": string
  "og:image:width": number
  "og:locale": string
  "og:site_name": string
  "og:title": string
  "og:type": string
  robots: string
  title: string
  "twitter:card": string
  "twitter:creator": TwitterCreator
  "twitter:site": TwitterCreator
}


export type OptionalMeta = Partial<Meta>

export interface SectionLayout {
  metas?: OptionalMeta
  layoutClass?: string
}