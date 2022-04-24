type Categories = [
  {
    description: string,
    id: number,
    link: string,
    name: string,
    slug: string
  }
]

type FeatureMedia = {
  '2048x2048': string,
  'big-size': string,
  'thumbnail': string
}

export type Data = {
  id: number,
  categories: Categories,
  excerpt: string,
  featured_media: FeatureMedia,
  headline: string,
  link: string,
  slug: string,
  title: string
}

export interface DataResponse {
  data: Array<Data>,
  size: number,
  pages: number
}