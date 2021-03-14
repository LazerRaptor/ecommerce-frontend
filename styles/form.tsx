import styled from "styled-components";
import { variants } from "./variables";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Container = styled.div`
  max-width: 20rem;
  min-width: min(90%, 20rem);
`;

const Header = styled.header`
  font-family: "Domine", serif;
  font-weight: 400;
  font-size: 1.8em;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Field = styled.input`
  border: 1px solid ${(props) => props.isInvalid ? variants.danger : "hsl(0, 0%, 60%)"};
  outline: 0;
  line-height: 2rem;
  font-size: 1.1em;
  font-weight: 400;
  padding: 0.65em;
  color: hsl(0, 0%, 33%);
`;

const Label = styled.label`
  font-size: 1em;
  font-weight: 400;
  letter-spacing: 0.25px;
  color: hsl(0, 0%, 32%);
  margin-bottom: 0.4rem;
`;

const Feedback = styled.div`
  font-size: .85em;
  color: ${variants.danger};
  margin-top: 4px;
`;

const FormStatus = styled.div`
  font-size: .94em;
  color: ${variants.danger};
  text-align: center;
  height: 1em;
`;

export {
  Wrapper,
  Container,
  Form,
  Field,
  Header,
  Label,
  Feedback,
  FormStatus
};
