import Head from "next/head";
import { BasicProps } from "interfaces/components/BasicProps.interface";
import { SectionLayout } from "interfaces/components/Layout/section.interface";

type MetaExclude = "ampUrl" | "schema" | "msvalidate.01" | "yandex-verification"
const MetaExludeArray = ["ampUrl", "schema", "msvalidate.01", "yandex-verification"]
let metaTitle: string
export const Layout = <Props extends BasicProps & Exclude<SectionLayout, MetaExclude>>(
  props: Props,
) => {
  return (
    <>
      <Head>
        <meta property="twitter:card" content="summary" />
        {
          props.metas && Object.entries(props.metas).map(([key, value]) => {
            if (!MetaExludeArray.includes(key))
              return <meta key={key} property={`${key}`} content={`${value}`} />
            if (key === 'title') {
              metaTitle = `${value}`
              return
            }
          })
        }
        {metaTitle && <title>{metaTitle}</title>}
      </Head>
      <section className={"p-2 h-screen overflow-y-auto" + ` ${props.layoutClass}`}>
        {props.children}
      </section>
    </>
  )
}