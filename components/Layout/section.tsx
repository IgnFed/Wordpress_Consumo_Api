import Head from "next/head";
import { BasicProps } from "interfaces/components/BasicProps.interface";
import { SectionLayout } from "interfaces/components/Layout/section.interface";

export const Layout = <Props extends BasicProps & SectionLayout>(
  props: Props,
)=>{
  const filteredProps = Object.entries(props).filter(([_, value])=> value.includes('meta-'))
  const serializedObject = filteredProps.map(([key, value])=>({[key]: value.replace('meta-', "")}))
  console.log({props,filteredProps, serializedObject})
  return (
    <>
    <Head>
      <meta property="twitter:card" content="summary" />
      {
        Object.entries(serializedObject).map(([key, value])=>(
          <meta key={key} property={`og:${key}`} content={`${value}`} />
        ))
      }
      { props.title && <title>Mejor con Salud - {props.title}</title> }
    </Head>
      <section className={"p-2 h-screen overflow-y-auto" + ` ${props.layoutClass}`}>
        {props.children}
      </section>
    </>
  )
}