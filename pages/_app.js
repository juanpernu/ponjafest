import "../styles/index.scss";
import Head from "next/head";
import Link from "next/link";
import { CookiesProvider } from "react-cookie";

import { Header } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <Head>
        <title>Ponja Fest 2021</title>
        <meta property="og:title" content="Ponjafest 2021" />
        <meta
          property="og:description"
          content="17 de Abril | Los 30 que no fueron."
        />
        <meta
          property="og:image"
          content="http://euro-travel-example.com/thumbnail.jpg"
        />
        <meta property="og:url" content="https://ponjafest.vercel.app" />
      </Head>
      <div className="wrapper">
        <Header />
        <Component {...pageProps} />
      </div>
    </CookiesProvider>
  );
}

export default MyApp;
