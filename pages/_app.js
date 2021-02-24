import { GlobalStyle } from "../styles/global";
import { LayoutContextProvider } from "../lib/contexts/layoutContext";
import { UserContextProvider } from "../lib/contexts/userContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <LayoutContextProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </LayoutContextProvider>
    </UserContextProvider>
  );
}

export default MyApp;
