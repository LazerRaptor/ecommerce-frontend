import Image from "next/image";
import styled from "styled-components";
import { TImage } from "../../../lib/utils/interfaces";

const Item = styled.li`
  margin: 8px 0;
  box-shadow: 0 0 0 3px
    ${(props) => (props.active ? "hsl(60, 0%, 64%)" : "transparent")};
`;

const ImageList = ({
  images,
  select,
  selected,
  width = "76px",
  height = "76px",
}) => {
  const handleOnClick = (id) => {
    let [img] = images.filter((i) => i.id == id);
    select(img);
  };

  return images.length > 1 ? (
    <ul>
      {images.map((image: TImage) => (
        <Item
          key={image.id}
          onClick={() => handleOnClick(image.id)}
          active={selected.id == image.id}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={width}
            height={height}
            objectFit="contain"
          />
        </Item>
      ))}
    </ul>
  ) : null;
};

export default ImageList;