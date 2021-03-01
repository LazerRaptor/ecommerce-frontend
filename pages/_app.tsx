import { GlobalStyle } from "../styles/global";
import { LayoutContextProvider } from "../lib/contexts/layoutContext";
import { CartContextProvider } from "../lib/contexts/cartContext";

function MyApp({ Component, pageProps }) {
  return (
    <LayoutContextProvider>
      <CartContextProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </CartContextProvider>
    </LayoutContextProvider>
  );
}

export default MyApp;
