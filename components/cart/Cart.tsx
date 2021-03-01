import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../../lib/contexts";
import Spacer from "../ui/Spacer";
import CartItem from "./CartItem";
import Summary from "./Summary";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 5fr 2fr;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
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

const Cart = function() {
  const { cartItems } = useContext(CartContext);
  return (
    <Wrapper>
      <List>
        <ListItem>
          <Header>Your cart: {cartItems.length} items</Header> 
        </ListItem>
        <Spacer y={2} />
        {cartItems.map(item => (
          <ListItem key={item.id}>
            <CartItem item={item} />
            <Spacer y={2} />
          </ListItem>
        ))}
      </List>
      <Summary items={cartItems} />
    </Wrapper>
  )
}

export default Cart;

