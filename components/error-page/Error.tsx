import styled from "styled-components";
import { useRouter } from "next/router";

const Page = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 16rem;
  height: 5rem;
`;

const Code = styled.span`
  font-size: 2rem;
  font-weight: 600;
`;

const Delimiter = styled.span`
  border-left: 1px solid hsl(0, 0%, 80%);
  height: 5rem;
`;

const Message = styled.span`
  font-size: 1.2rem;
`;

const Error = ({ code, message }) => {
  // TODO: need a router.back() link
  const router = useRouter();
  return (
    <Page>
      <Content>
        <Code>{code}</Code>
        <Delimiter />
        <Message>{message}</Message>
      </Content>
    </Page>
  );
};

export default Error;
