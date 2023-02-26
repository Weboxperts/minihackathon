// import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Navs from "../comp/navs";
// import Footer from "../comp/footer";
import type { AppProps } from "next/app";
import Store from "../redux/store";
import { Provider } from 'react-redux';

// import "@fortawesome/fontawesome-svg-core/styles.css";
// import { config } from "@fortawesome/fontawesome-svg-core";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={Store}>
      <Navs />
     
      <Component {...pageProps} />
    </Provider>
  );
}
