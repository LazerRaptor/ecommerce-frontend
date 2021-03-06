import styled from "styled-components";
import { CURRENCY } from "../../../lib/constants";
import { IProduct } from "../../../lib/utils/interfaces";
import { useCart } from "../../../lib/hooks";
import StarRating from "../../common/StarRating";
import Spacer from "../../ui/Spacer";

const Title = styled.h1`
  font-size: 2em;
  font-weight: 600;
`;

const Paragraph = styled.p`
  font-size: 1rem;
`;

const Price = styled.div`
  font-size: 1.8em;
  font-weight: 600;
`;

const ProductItem = ({ product }: {product: IProduct}) => {
  const { AddButton } = useCart();
  return (
    <div>
      <Title>{product.title}</Title>
      <Spacer y={1} />
      <StarRating grade={0} votes={0} size={24} />
      <Spacer y={2} />
      <Paragraph>{product.description}</Paragraph>
      <Spacer y={2} />
      <Price>
        {CURRENCY.sign}
        {product.price}
      </Price>
      <Spacer y={2} />
      <AddButton productId={product.id} />
    </div>
  );
};

export default ProductItem;
