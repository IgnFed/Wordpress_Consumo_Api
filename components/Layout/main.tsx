import Head from "next/head"
import { BasicProps } from "interfaces/components/BasicProps"

export default function Layout
  <Props extends BasicProps>(
    {
      children,

    }: Props
  ) {
  return (
    <main className="bg-slate-900 p-2 text-white min-h-screen">
      <Head>
        <link rel="shortcur icon" href="https://cdn.atomik.vip/themes/mcs/favicon.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="public/vercel.svg" />
        <meta lang="es" />
        <meta property="og:site_name" content="Pagina de inicio de Mejor con salud" />
        <meta property="og:description" content="En nuestro portal encontrarás contenido de diversa 
        índole: enfermedades y tratamientos, bienestar, remedios naturales, dietas y recetas, 
        psicología, pareja, maternidad y estilo de vida. Todo ello desarrollado por un equipo de 
        sanitarios y periodistas especializados en salud que se apoyan en la investigación científica, 
        los descubrimientos farmacéuticos y,  en general, toda la información de vanguardia en cada temática." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mejor con salud - Home" />
        <meta property="og:locale" content="es_ES" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:creator" content="@IgnFedor" />
        <meta property="og:url" content="http://localhost:3001/" />

        <title>Mejor con salud</title>
      </Head>
      <>
        {children}
      </>
    </main>
  )
}