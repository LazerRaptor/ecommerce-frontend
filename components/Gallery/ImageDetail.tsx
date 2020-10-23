import { useState, useEffect} from 'react';
import styles from './ImageDetail.module.scss';


const ImageDetail = ({ image, width=600, height=600, zoom=2 }) => {
  const [magnifierShown, setMagnifierShown] = useState(false);
  const [offset, setOffset] = useState([0, 0])
  const calcOffset = (e) => {
    const target = e.target
    const rect = target.getBoundingClientRect()
    let offsetX = (e.clientX - rect.x) / rect.width * 100
    let offsetY = (e.clientY - rect.y) / rect.height * 100
    return [offsetX, offsetY]   
  }
  const handleOnMouseMove = (e) => {
    const [x, y] = calcOffset(e)
    setOffset([x, y])
  }
  return (
    <div className={styles['image-detail']}>
      <div className={styles['image-wrapper']}>
        <img
          src={image.src}
          alt={image.alt}
          width={width}
          height={height}
          className="object-contain"
          onMouseOver={() => setMagnifierShown(true)}
          onMouseLeave={() => setMagnifierShown(false)}
          onMouseMove={(e) => handleOnMouseMove(e)}
        />
      </div>
      <div 
        className={styles['magnifier-wrapper']}
        style={{ display: magnifierShown ? 'block' : 'none' }}
      >
        <img 
          src={image.src}
          alt={image.alt}
          width={width*zoom}
          height={height}
          className="object-none"
          style={{ objectPosition: `${offset[0]}% ${offset[1]}%` }}
        />
      </div>
    </div>
  );
};


export default ImageDetail;
