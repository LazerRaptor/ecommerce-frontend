import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { useCart } from "../../lib/hooks";
import { IProduct } from "../../lib/utils/interfaces";
import { BASE_URL, CURRENCY } from "../../lib/constants";
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";

const Container = styled.div`
  display: grid;
  grid-template-columns: 100px 3fr 1fr 1fr 10ch;
`;

const FlexRowCenter = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.a`
  font-size: 1.2em;
  font-weight: 400;
  color: black;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Input = styled.input`
  border: 0;
  text-align: center;
  width: 1rem;
  outline: 0;
`;
const Button = styled.button.attrs((props) => ({
  disabled: props.disabled,
}))`
  border: 0;
  outline: 0;
  cursor: pointer;
`;

const Price = styled.span`
  font-size: 1.2em;
  font-weight: 400;
`;



// FIXME refactoring needed (useReducer instead?)
const CartItem = function ({ product, quantity }: { product: IProduct, quantity: number }) {
  const { cart, RemoveButton } = useCart();
  const [showcase] = product.images.filter((img) => img.is_showcase);
  const image = showcase || product.images[0];
  const [inputValue, setValue] = useState<string>(String(quantity));

  const updateQuantity = async (value: number) => {
    if (isNaN(value) || value < 1) value = quantity;
    try { 
      await axios.put(`${BASE_URL}/api/basket/${cart.id}/`, { product: product.id, quantity: value });
      setValue(String(value));
    } catch(error) {
      console.warn(error);
    }
  }

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    let value = Number(e.currentTarget.value);
    if (isNaN(value) || value < 1) {
      setValue("");
    } else {
      setValue(String(value));
    }
  }

  return (
    <Container>
      <FlexRowCenter>
        <Link href={`products/${encodeURIComponent(product.slug)}`}>
          <a>
            <Image
              src={image.src}
              alt={image.alt}
              width="72"
              height="72"
              objectFit="contain"
            />
          </a>
        </Link>
      </FlexRowCenter>
      <FlexRowCenter>
        <Link href={`products/${encodeURIComponent(product.slug)}`}>
          <Title>{product.title}</Title>
        </Link>
      </FlexRowCenter>
      <FlexRowCenter>
        <Button onClick={() => updateQuantity(Number(inputValue) - 1)} disabled={Number(inputValue) <= 1}>
          <IoRemoveSharp />
        </Button>
        <Input
          type="text"
          value={String(inputValue)}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            handleOnChange(e)
          }
          onBlur={(e: React.FocusEvent<HTMLInputElement>) => updateQuantity(Number(e.currentTarget.value))}
        />
        <Button onClick={() => {updateQuantity(Number(inputValue) + 1)}}>
          <IoAddSharp />
        </Button>
      </FlexRowCenter>
      <FlexRowCenter>
        <Price>
          {CURRENCY.sign}
          {product.price}
        </Price>
      </FlexRowCenter>
      <FlexRowCenter>
        <RemoveButton productId={product.id} />
      </FlexRowCenter>
    </Container>
  );
};

export default CartItem;
