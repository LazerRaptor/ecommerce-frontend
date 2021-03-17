import styled from "styled-components";
import Payment from "./Payment";
import PersonalData from "./PersonalData"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  section {
    margin: 2rem;
  }
`;

const HeaderOne = styled.h1`
  font-weight: 1000;
  font-size: 2.2em;
`;

const HeaderThree = styled.h3`
  font-weight: 1000;
  font-size: 1.4em;
  margin: .25em 0;
`;

export default function Checkout({}) {
  return (
    <Container>
      <HeaderOne>Checkout</HeaderOne>
      <section id="one">
        <HeaderThree>Personal information</HeaderThree>
        <PersonalData />
      </section>
      <section id="two">
        <HeaderThree>Payment details</HeaderThree>
        <Payment />
      </section>
    </Container>
  )
};