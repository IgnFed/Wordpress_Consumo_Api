import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { Layout } from "components/Layout/section";
import { PostData } from "interfaces/DataResponse.interface";

interface PostProps {
  response: PostData
}

export default function Post<Props extends PostProps>(
  {
    response
  }: Props,
) {
  console.clear()
  console.log(response)
  return (
    <Layout
      metas={response.metas}
      layoutClass="grid grid-cols-[1fr_0.4fr] gap-2"
    >
      <div>
        <h1>{response.title}</h1>
        <p>{}</p>
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