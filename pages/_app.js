import "../styles/index.scss";
import Head from "next/head";
import Link from "next/link";
import { CookiesProvider } from "react-cookie";

import { Header } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <Head>
        <title>La despediduwu</title>
        <meta property="og:title" content="La despediduwu 2.0" />
        <meta property="og:description" content="La despediduwu" />
        <meta
          property="og:image"
          content="https://images.ctfassets.net/hsst7dmi6ghe/285uZ64eGxSxzBx4S6dpD9/7d034c92e6b148f4afa7d3bbe55c676d/export-for-web.jpg"
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
