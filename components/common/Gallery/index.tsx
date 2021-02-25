import { useState } from "react";
import styled from "styled-components";
import ImageList from "./ImageList";
import ImageDetail from "./ImageDetail";
import Spacer from "../../ui/Spacer";

const Container = styled.div`
  display: flex;
`;

const Gallery = ({ images }) => {
  const [showcase] = images.filter((img) => img.is_showcase);
  const initialValue = showcase || images[0];

  const [selectedImage, setSelected] = useState(initialValue);
  return (
    <Container>
      <ImageList
        images={images}
        select={setSelected}
        selected={selectedImage}
      />
      {images.length > 1 ? <Spacer x="1.5" /> : null}
      <ImageDetail image={selectedImage} />
    </Container>
  );
};

export default Gallery;
