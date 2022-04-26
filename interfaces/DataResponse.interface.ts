import { OnlyIncludeData } from "utils/types"
import { Meta } from "./MetaTags.interface"

export type Categories = [
  {
    description: string,
    id: number,
    link: string,
    name: string,
    slug: string,
    permalink: string
  }
]

type AuthorProfession = {
  standard: string,
  signed: string
}

export type AuthorSocialProfiles = {
  facebook: string,
  twitter: string,
  instagram: string,
  linkedin: string
  youtube: string,
  url: string,
  pinterest: string
}

type Author = {
  id: number,
  link: string,
  name: string,
  permalink: string,
  picture: string,
  profession: AuthorProfession,
  reviewer: boolean,
  slug: string,
  social_profiles: AuthorSocialProfiles,
  summary: string,
  type: string,
  verified: boolean,
}

type FeatureMedia = {
  '2048x2048': string,
  'big-size': string,
  'thumbnail': string
}

type DataIncluded = "categories" | "excerpt" | "featured_media" | "headline" | "id" | "link" | 
                    "permalink" | "slug" | "sponsor" | "title"
type OtherAuthorPost = OnlyIncludeData<PostData, DataIncluded>
type RelatedLinks = OnlyIncludeData<PostData, "id" | "link" | "permalink" | "slug" | "title"> & 
{
  description: string
}


export type PostData = {
  author: Author,
  id: number,
  categories: Categories,
  content: string,
  excerpt: string,
  featured_media: FeatureMedia,
  headline: string,
  link: string,
  metas: Meta,
  next_post: OtherAuthorPost,
  next_posts: Array<OtherAuthorPost>,
  permalink: string,
  previous_post: OtherAuthorPost,
  sponsor: string,
  previous_posts: Array<OtherAuthorPost>,
  published: string,
  related_links: Array<RelatedLinks>,
  slug: string,
  tags: Array<string>,
  title: string,
}

export interface DataResponse<DataType = Array<PostData>>{
  data: DataType,
  size: number,
  pages: number
}