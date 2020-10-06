import { v4 as uuidv4 } from "uuid";
const ImageList = ({ images, width, height, setActiveImage }) => {
  return images.length > 1 ? (
    <ul className="grid grid-rows-6 gap-y-5">
      {images.map((image) => (
        <li key={uuidv4()}>
          <img
            src={image.src}
            alt={image.alt}
            width={width}
            height={height}
            onClick={(e) => setActiveImage(e)}
          />
        </li>
      ))}
    </ul>
  ) : null;
};

ImageList.defaultProps = {
  width: "76px",
  height: "76px",
};

export default ImageList;
