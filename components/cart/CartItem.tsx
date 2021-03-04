import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { IProduct } from "../../lib/utils/interfaces";
import { CURRENCY } from "../../lib/constants";
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

const RemoveBtn = styled.button`
  border: 0;
  outline: 0;
  text-decoration: underline;
  font-size: 0.8em;
  font-weight: 300;
  cursor: pointer;
`;

const CartItem = function ({ item }: { item: IProduct }) {
  const [showcase] = item.images.filter((img) => img.is_showcase);
  const image = showcase || item.images[0];
  const [qty, setQty] = useState<number>(1);
  /** Event handlers */
  const handleChangeQty = function (event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault();
    const value = event.currentTarget.value;
    let num: number;
    num = Number(value);
    if (isNaN(num)) num = qty;
    setQty(num);
  };
  const handleOnBlur = function (event: React.FocusEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;
    if (Number(value) <= 1) setQty(1);
  };
  return (
    <Container>
      <FlexRowCenter>
        <Link href={`products/${encodeURIComponent(item.slug)}`}>
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
        <Link href={`products/${encodeURIComponent(item.slug)}`}>
          <Title>{item.title}</Title>
        </Link>
      </FlexRowCenter>
      <FlexRowCenter>
        <Button onClick={() => setQty(qty - 1)} disabled={qty <= 1}>
          <IoRemoveSharp />
        </Button>
        <Input
          type="text"
          value={qty}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            handleChangeQty(e)
          }
          onBlur={(e: React.FocusEvent<HTMLInputElement>) => handleOnBlur(e)}
        />
        <Button onClick={() => setQty(qty + 1)}>
          <IoAddSharp onClick={() => setQty(qty + 1)} />
        </Button>
      </FlexRowCenter>
      <FlexRowCenter>
        <Price>
          {CURRENCY.sign}
          {item.price}
        </Price>
      </FlexRowCenter>
      <FlexRowCenter>
        <RemoveBtn onClick={() => console.log("remove")}>Remove</RemoveBtn>
      </FlexRowCenter>
    </Container>
  );
};

export default CartItem;
