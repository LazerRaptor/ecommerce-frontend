import { v4 as uuidv4 } from "uuid";
const ImageList = ({ images, width, height }) => {
  return images.length > 1 ? (
    <ul className="grid grid-rows-6 gap-y-5">
      {images.map((image) => {
        return (
          <li key={uuidv4()}>
            <img
              src={image.src}
              alt={image.alt}
              width={width}
              height={height}
            />
          </li>
        );
      })}
    </ul>
  ) : null;
};

ImageList.defaultProps = {
  width: "76px",
  height: "76px",
};

export default ImageList;
