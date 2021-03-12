import '../styles/index.scss'
import Head from 'next/head'
import Link from 'next/link'
import { CookiesProvider } from "react-cookie"

function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <Head>
        <title>Ponja Fest</title>
      </Head>
      <div className="wrapper">
        <Link href='/'>
          <a className="title">Ponja Fest</a>
        </Link>
        <Component {...pageProps} />
      </div>
    </CookiesProvider>
  )
}

export default MyApp
