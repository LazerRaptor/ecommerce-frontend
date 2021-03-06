import { useContext } from "react";
import Head from "next/head";
import styled from "styled-components";
import { LayoutContext } from "lib/contexts/layoutContext";
import Sidebar from "components/ui/Sidebar";
import Navbar from "components/ui/Navbar";
import Spacer from "components/ui/Spacer";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  width: 88%;
  margin: 0 auto;
  height: 100%;
  box-sizing: border-box;
  @media (max-width: 736px) {
    width: 98%;
    margin: 0 auto;
  }
`;

const Screenshade = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: hsla(0, 0%, 0%, 0.25);
  z-index: 9;
  box-sizing: content-box;
`;

const Layout = ({ children, title = "e-commerce app" }) => {
  const { sidebar, setSidebar } = useContext(LayoutContext);
  const screenshade = sidebar ? (
    <Screenshade onClick={() => setSidebar(false)} />
  ) : null
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Wrapper>
        <Navbar />
        <Spacer y={1} />
        <Sidebar />
        <Main>{children}</Main>
        {screenshade}
      </Wrapper>
    </>
  );
};

export default Layout;
