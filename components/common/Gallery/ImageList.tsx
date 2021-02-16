import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import styles from "./ImageList.module.scss";

const Item = styled.li`
  margin: 8px 0;
  box-shadow: 0 0 0 3px
    ${(props) => (props.active ? "hsl(60, 65%, 58%)" : "transparent")};
`;

const ImageList = ({ images, width = "76px", height = "76px", activeImage, setActiveImage }) =>
  images.length > 1 ? (
    <ul>
      {images.map((image) => (
        <Item active={image.src === activeImage.src} key={uuidv4()}>
          <img
            src={image.src}
            alt={image.alt}
            width={width}
            height={height}
            onClick={(e) => setActiveImage(e)}
            className="object-contain"
          />
        </Item>
      ))}
    </ul>
  ) : null;

export default ImageList;
