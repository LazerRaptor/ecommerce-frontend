import { useContext, useState } from "react";
import styled from "styled-components";
import { addProduct } from "../../../lib/api/cart";
import { UserContext } from "../../../lib/contexts/userContext";
import StarRating from "../../common/StarRating";
import Button from "../../ui/Button";
import Spacer from "../../ui/Spacer";


const Title = styled.h1`
  font-size: 2.2em;
  font-weight: 400;
`;

const Paragraph = styled.p`
  font-size: 1rem;
`

const Price = styled.div`
  font-size: 1.8em;
  font-weight: 600;
`;


const ProductItem = ({ product }) => {
  /** Add button */ 
  const handleOnClick = () => {
    const { cart } = useContext(UserContext)
    addProduct({
      product: product.id,
      cart: cart
    })
  }
  return (
    <div>
      <Title>{product.title}</Title>
      <Spacer y={1} />
      <StarRating grade={0} votes={0} size={24} />
      <Spacer y={2} />
      <Paragraph>{product.description}</Paragraph>
      <Spacer y={2} />
      <Price>${product.price}</Price>
      <Spacer y={2} />
      <Button 
        title="Add to Cart" 
        size="18" 
        onClick={() => handleOnClick()}
      />
    </div>
  );
}

export default ProductItem;