import { useRouter } from "next/router";
import styled from "styled-components";
import { ICart } from "lib/utils/interfaces";
import { CURRENCY } from "lib/constants";
import Button from "../ui/Button";
import Spacer from "../ui/Spacer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 350px;
  padding: 0 2rem;
  @media (max-width: 1200px) {
    margin-top: 1rem;
    padding: 0;
  }
`;

const Item = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin: 0.5rem 0;
  width: 100%;
  color: hsl(0, 0%, 41%);
  display: flex;
  justify-content: space-between;
  span.bolder {
    font-size: 1.2em;
    color: black;
  }
`;

const Summary = function ({ cart }: { cart: ICart }) {
  const router = useRouter();
  const handleOnClick = () => {
    router.push('/checkout')
  }
  return (
    <Wrapper>
      <Item>
        <span className="bolder">Est. Total: </span>
        <span className="bolder">
          {CURRENCY.sign}
          {cart.total.toFixed(2)}
        </span>
      </Item>
      <Item>
        <span>Subtotal: </span>
        {CURRENCY.sign}
        {cart.total.toFixed(2)}
      </Item>
      <Item>
        <span>Shipping: </span> FREE
      </Item>
      <Spacer y={0.6} />
      <Button
        isFullWidth
        isRound
        onClick={() => handleOnClick()}
      >Proceed to Checkout</Button>
    </Wrapper>
  );
};

export default Summary;
