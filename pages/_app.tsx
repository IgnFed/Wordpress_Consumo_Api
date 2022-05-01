import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import '../styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Loader from 'components/Loader'

const Layout = dynamic(()=> import('components/Layout/main'))

function MyApp({ Component, pageProps }: AppProps) {
  const { events } = useRouter()
  const [ loading, setLoading ] = useState(false)
  useEffect(()=>{
    events.on("routeChangeStart", ()=> setLoading(true))
    events.on("routeChangeComplete", ()=> setLoading(false))
    return ()=>{
      events.off("routeChangeStart", ()=> setLoading(false))
      events.off("routeChangeComplete", ()=> setLoading(false) )
    }
  }, [])
  return (
    <Layout >
      {
      loading  ?
        <Loader className="absolute flex left-2/4 top-2/4" />
        :
        <Component {...pageProps} />
      }
    </Layout>
  )
}

export default MyApp
