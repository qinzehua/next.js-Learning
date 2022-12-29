import "../styles/globals.scss";
import { AppProps } from "next/app";
import type { NextPage } from 'next'

 function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default App;
