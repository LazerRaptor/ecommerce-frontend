import { GlobalStyle } from "../styles/global";
import { LayoutContextProvider } from "../lib/contexts/layoutContext";
import { UserContextProvider } from "../lib/contexts/userContext";

function MyApp({ Component, pageProps }) {
  return (
        <div>

          <GlobalStyle />
          <Component {...pageProps} />
        </div>
  );
}

export default MyApp;
