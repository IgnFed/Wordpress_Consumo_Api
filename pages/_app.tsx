import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import '../styles/globals.css'

const Layout = dynamic(()=> import('components/Layout/main'))

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout >
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
