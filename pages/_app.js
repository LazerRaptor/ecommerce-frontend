import Layout from "../components/common/Layout";
import { LayoutContextProvider } from "../lib/contexts/layoutContext";
import { GlobalStyle } from "../styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <LayoutContextProvider>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </LayoutContextProvider>
  );
}

export default MyApp;
