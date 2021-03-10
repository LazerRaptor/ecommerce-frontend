import { useCart } from "../../lib/hooks";
import { TItem } from "../../lib/utils/interfaces";
import styled from "styled-components";
import Spacer from "../ui/Spacer";
import CartItem from "./CartItem";
import Summary from "./Summary";

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
  const { cart, isLoading, error } = useCart();
  const CartView = ({ items } : { items: TItem[] }) =>
    items.length > 0 ? (
      <Wrapper>
        <List>
          <ListItem>
            <Header>Your cart: {items.length} items</Header>
          </ListItem>
          <Spacer y={2} />
          {items.map((item) => (
            <ListItem key={item.product.id}>
              <CartItem product={item.product} quantity={item.quantity} />
              <Spacer y={2} />
            </ListItem>
          ))}
        </List>
        <Summary items={items} />
      </Wrapper>
    ) : (
      <div>Your cart is empty</div>
    );
  return isLoading ? <div>is loading...</div>
                   : error ? <div>{error.message}</div> 
                             :<CartView items={cart.items} />;
};

export default Cart;
