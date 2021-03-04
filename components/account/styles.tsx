import styled from "styled-components";
import { Form, Field } from "formik";

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

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const StyledField = styled(Field)`
  border: 1px solid hsl(0, 0%, 62%);
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

const StyledError = styled.div`
  font-size: 0.9em;
  color: hsl(0, 53%, 48%);
  text-align: center;
  padding-top: 1em;
`;

export {
  Wrapper,
  Container,
  StyledForm,
  StyledField,
  Header,
  Label,
  StyledError,
};
