import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

const Figure = styled.figure``;
const Zoom = styled.figure`
  display: ${(props) => (props.active ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border: 1px solid hsl(0, 0%, 43%);
`;

const ImageDetail = ({ image, width = 480, height = 480 }) => {
  return (
    <Container>
      <Figure>
        <Image
          src={image.src}
          alt={image.alt}
          width={width}
          height={height}
          objectFit="contain"
        />
      </Figure>
    </Container>
  );
};

export default ImageDetail;