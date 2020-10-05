import ImageList from "./ImageList";

const ImageDetail = ({ image, width, height }) => {
  return (
    <div>
      <img src={image.src} alt={image.src} width={width} height={height} />
    </div>
  );
};

ImageDetail.defaultProps = {
  width: "320px",
  height: "320px",
};

export default ImageDetail;
