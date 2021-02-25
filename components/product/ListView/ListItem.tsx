import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Spacer from "../../ui/Spacer";
import Favorite from "../../common/Favorite";
import { useState } from "react";

const Card = styled.div`
  text-align: center;
  background: white;
  height: 100%;
  width: 100%;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Anchor = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const Footer = styled.div``;

const Title = styled.h2`
  font-size: 1.1em;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: hsl(0, 0%, 35%);
`;

const Price = styled.div`
  font-size: 1em;
  font-weight: 600;
`;

const Panel = styled.div`
  position: absolute;
  top: 85%;
  right: 50%;
  transform: translate(50%, 0%);
  border-radius: 25% 25% 0 0;
  height: 36px;
  width: 48px;
  background: white;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListItem = ({ item }) => {
  let [image] = item.images.filter((img) => img.is_showcase);
  // if no image is marked as showcase, pick the first one
  image = image || item.images[0];
  const [hover, setHover] = useState(false);
  return (
    <Card
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      hover={hover}
    >
      <ImageWrapper>
        <Link
          href={{
            pathname: "/products/[slug]",
            query: { slug: item.slug },
          }}
        >
          <Anchor>
            <Image
              src={image.src}
              alt={image.alt}
              width={240}
              height={240}
              quality={100}
              objectFit="contain"
            />
          </Anchor>
        </Link>

        <Panel hover={hover}>
          <Favorite size={24} />
        </Panel>
      </ImageWrapper>

      <Footer>
        <Title>
          <Link
            href={{
              pathname: "/products/[slug]",
              query: { slug: item.slug },
            }}
          >
            <Anchor>{item.title}</Anchor>
          </Link>
        </Title>
        <Spacer y={0.5} />
        <Price>${item.price}</Price>
      </Footer>
    </Card>
  );
};

export { ListItem };
