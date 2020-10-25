import { v4 as uuidv4 } from "uuid";
import styles from './ImageList.module.scss';


const ImageList = ({ images, width, height, activeImage, setActiveImage }) => {
  const handleOnClick = (e) => {
    setActiveImage(e)
  }
  const classes = (src) => {
    let cls = styles['list-item']
    if (src === activeImage.src) {
      cls += ` ${styles['item-active']}`
    }
    return cls
  }
  return images.length > 1 ? (
    <ul>
      {images.map((image) => (
        <li className={classes(image.src)} key={uuidv4()}>
          <img
            src={image.src}
            alt={image.alt}
            width={width}
            height={height}
            onClick={(e) => handleOnClick(e)}
            className="object-scale-down"
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
