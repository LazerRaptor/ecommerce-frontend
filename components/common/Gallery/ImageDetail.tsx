import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";


const Container = styled.div`
  position: relative;
`;

const Figure = styled.figure``;
const Zoom = styled.figure`
  display: ${props => props.active ? "block" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border: 1px solid hsl(0, 0%, 43%);
`;

const ImageDetail = ({ image, width = 480, height = 480 }) => {
  const [zoomActive, setZoomActive] = useState(false);
  const [offset, setOffset] = useState([50, 50]);

  const calcOffset = (e) => {
    const rect = e.target.getBoundingClientRect();
    let offsetX = ((e.clientX - rect.x) / rect.width) * 100;
    let offsetY = ((e.clientY - rect.y) / rect.height) * 100;
    return [offsetX, offsetY];
  };

  const handleOnMouseMove = (e) => {
    setOffset(calcOffset(e));
  };

  return (
    <Container>
      <Figure>
        <Image
          src={image.src}
          alt={image.alt}
          width={width}
          height={height}
          onMouseOver={() => setZoomActive(true)}
          onMouseLeave={() => setZoomActive(false)}
          onMouseMove={(e) => handleOnMouseMove(e)}
          objectFit="contain"
        />
      </Figure>
      <Zoom active={zoomActive}>
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url("${image.src}")`,
            backgroundSize: "250%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: `${offset[0]}% ${offset[1]}%`,
          }}
        ></div>
      </Zoom>
    </Container>
  );
};

export default ImageDetail;
