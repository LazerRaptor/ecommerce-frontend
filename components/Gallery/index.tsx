import ImageList from "./ImageList";
import ImageDetail from "./ImageDetail";
import Spacer from "../Spacer";

const Gallery = ({ images, frontImage }) => {
  return (
    <div className="flex">
      <ImageList images={images} />
      <Spacer x="1.5" />
      <ImageDetail image={frontImage} />
    </div>
  );
};

export default Gallery;
