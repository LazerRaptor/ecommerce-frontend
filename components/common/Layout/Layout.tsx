import { Fragment, useContext } from "react";
import Head from "next/head";
import styled from "styled-components";
import { LayoutContext } from "../../../lib/contexts/layoutContext";
import Sidebar from "../../ui/Sidebar";
import Navbar from "../../ui/Navbar";
import Spacer from "../../ui/Spacer";

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  width: 80%;
  margin: 0 auto;
  min-height: 100%;
  box-sizing: border-box;
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
  ) : null;
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Layout;
