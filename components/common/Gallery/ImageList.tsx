import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

// FIXME: poor performance, switching between images forces redundant GET requests that get blocked

const Item = styled.li`
  margin: 8px 0;
  box-shadow: 0 0 0 3px
    ${(props) => (props.active ? "hsl(60, 0%, 64%)" : "transparent")};
`;

const ImageList = ({ images, select, selected, width = "76px", height = "76px" }) => {
  const handleOnClick = (id) => {
    let [img] = images.filter(i => i.id == id)
    select(img)
  }

  return images.length > 1 ? (
    <ul>
      {images.map((image) => (
        <Item 
          key={uuidv4()}
          onClick={() => handleOnClick(image.id)}
          active={selected.id == image.id}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={width}
            height={height}
            objectFit="contain"
            loading='eager'
          />
        </Item>
      ))}
    </ul>
  ) : null;
}

export default ImageList;
