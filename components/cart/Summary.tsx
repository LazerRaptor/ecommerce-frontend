import styled from "styled-components";
import { useEffect, useState } from "react";
import { IProduct } from "../../lib/utils/interfaces";
import { CURRENCY } from "../../lib/constants";
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

const Summary = function ({ items }: { items: Array<IProduct> }) {
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    let val = 0;
    if (items.length > 0)
      val = items.reduce((acc, item) => acc + Number(item.price), 0);
    setAmount(val);
  });
  return (
    <Wrapper>
      <Item>
        <span className="bolder">Est. Total: </span>
        <span className="bolder">
          {CURRENCY.sign}
          {amount.toFixed(2)}
        </span>
      </Item>
      <Item>
        <span>Subtotal: </span>
        {CURRENCY.sign}
        {amount.toFixed(2)}
      </Item>
      <Item>
        <span>Shipping: </span> FREE
      </Item>
      <Spacer y={0.6} />
      <Button
        isFullWidth
        title="Proceed to Checkout"
        size={19}
        onClick={() => console.log()}
      />
    </Wrapper>
  );
};

export default Summary;
