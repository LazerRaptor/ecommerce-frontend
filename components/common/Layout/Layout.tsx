import { useContext } from "react";
import styled from "styled-components";
import { LayoutContext } from "../../../lib/contexts/layoutContext";
import Sidebar from "../../ui/Sidebar";
import Navbar from "../../ui/Navbar";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Main = styled.div`
  max-width: 80%;
  margin: auto;
`;

const Screenshade = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: hsla(0, 0%, 0%, 0.25);
  z-index: 9;
`;

const Layout = ({ children }) => {
  const { sidebar, setSidebar } = useContext(LayoutContext);
  const screenshade = sidebar ? (
    <Screenshade onClick={() => setSidebar(false)} />
  ) : null;
  return (
    <Container>
      <Navbar />
      <Sidebar />
      <Main>{children}</Main>
      {screenshade}
    </Container>
  );
};

export default Layout;
