import styled from "styled-components";
import Spacer from "../ui/Spacer";
import CartItem from "./CartItem";
import Summary from "./Summary";
import { useCart } from "../../lib/hooks";
import Cookies from "js-cookie";
import { useState } from "react";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 5fr 2fr;
  justify-content: center;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li``;

const Header = styled.h1`
  font-size: 2em;
  font-weight: 400;
`;

const Cart = function () {
  const { cart, isLoading, isError } = useCart();
  const CartView = ({ cart }) =>
    cart.lines.length > 0 ? (
      <Wrapper>
        <List>
          <ListItem>
            <Header>Your cart: {cart.lines.length} items</Header>
          </ListItem>
          <Spacer y={2} />
          {cart.lines.map((item) => (
            <ListItem key={item.id}>
              <CartItem item={item} />
              <Spacer y={2} />
            </ListItem>
          ))}
        </List>
        <Summary items={cart.lines} />
      </Wrapper>
    ) : (
      <div>your cart is empty</div>
    );
  // FIXME if else blocks should be more visible
  return isLoading ? <div>is loading </div> : <CartView cart={cart} />;
};

export default Cart;
