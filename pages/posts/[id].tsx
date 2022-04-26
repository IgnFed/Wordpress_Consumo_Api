import dynamic from "next/dynamic";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { PostData } from "interfaces/DataResponse.interface";

const Layout = dynamic(() => import('components/Layout/article'))
const Section = dynamic(() => import('components/post/Section'))
const Socials = dynamic(() => import('components/post/Socials'))
const HeadLine = dynamic(() => import('components/post/Headline'))
const Image = dynamic(() => import('components/post/Image'))
const MetaArticle = dynamic(() => import('components/post/MetaArticle'))
const Link = dynamic(() => import('next/link'))
const Author = dynamic(() => import('components/post/Author'))

interface PostProps {
  response: PostData
}

export default function Post<Props extends PostProps>(
  {
    response
  }: Props,
) {
  return (
    <Layout
      metas={response.metas}
      layoutClass="sm:grid sm:grid-cols-[0.3fr_1fr_0.4fr] sm:gap-4 pb-0 pl-0"
    >
      <Socials socialsMedia={response.author.social_profiles} />
      <div className="mt-14 sm:mt-2 mb-2 col-start-2 overflow-y-auto pl-2 sm:pl-0">
        <Section titleAs="h1" className="mb-4 mt-8 sm:mt-0" title={response.title} >
          <div className="flex flex-wrap mt-8 gap-4 items-center">
            <MetaArticle>{new Date(response.published).toDateString()}</MetaArticle>
            {
              response.tags && response.tags.map((tag) => (
                <MetaArticle key={tag}>{tag}</MetaArticle>
              ))
            }

            <MetaArticle spanClassName="flex gap-2 items-center" >
              <Author name={response.author.name} avatar={response.author.picture} />
            </MetaArticle>
          </div>
          <HeadLine>
            {response.headline}
          </HeadLine>
          <Image
            src={response.featured_media["2048x2048"]}
            priority={true}
            alt={"Imagen"}
          />
          <div dangerouslySetInnerHTML={{__html:response.content}} className="mt-2 text-left" />
          <div className="mt-2">
            <MetaArticle>
              Categories: {response.categories.map((category) => (<span key={category.id}>{category.name}</span>))}
            </MetaArticle>
          </div>
        </Section>

      </div>
      <div className="mt-20 sm:mt-0 static top-full sm:relative sm:top-0 mb-2 pl-2 sm:pl-0">
        <h1>Related Articles</h1>
        {
          response.related_links.map((post) => (
            <Link href={`/posts/${post.id}`} key={post.id} passHref >
              <a>
                <Section className="m-[1rem_0]" titleAs="h4" key={post.id} title={post.title} />
              </a>
            </Link>
          ))
        }
      </div>
    </Layout>
  )
}

// getServerSideProps
export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {

  const { id } = context.params as { id: string };

  const response: PostData = await
    fetch(`https://beta.mejorconsalud.com/wp-json/mc/v3/posts/${id}`)
      .then((res) => res.json())

  return {
    props: {
      response
    }
  }
}