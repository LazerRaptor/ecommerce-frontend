import { useState } from "react";
import ImageList from "./ImageList";
import ImageDetail from "./ImageDetail";
import Spacer from "../../ui/Spacer";

const Gallery = ({ images }) => {
  const [showcaseImage] = images.filter((img) => img.is_showcase);
  const [activeImage, setActiveImage] = useState(showcaseImage);
  return (
    <div className="flex">
      <ImageList
        images={images}
        activeImage={activeImage}
        setActiveImage={(e) =>
          setActiveImage(images.filter((img) => img.src === e.target.src)[0])
        }
      />
      {images.length > 1 ? <Spacer x="1.5" /> : null}
      <ImageDetail image={activeImage} />
    </div>
  );
};

export default Gallery;
