import { useState } from 'react';
import styles from './ImageDetail.module.scss';


const ImageDetail = ({ image, width=480, height=480, zoom=4 }) => {
  /** State */
  const [zoomActive, setZoomActive] = useState(false)
  const [offset, setOffset] = useState([50, 50])

  /** Event handlers && helper functions */
  const handleOnMouseOver = (e) => {
    setZoomActive(true)
  }
  
  const handleOnMouseLeave = (e) => {
    setZoomActive(false)
  }
  
  const calcOffset = (e) => {
    const rect = e.target.getBoundingClientRect()
    let offsetX = (e.clientX - rect.x)/rect.width*100
    let offsetY = (e.clientY - rect.y)/rect.height*100
    return [offsetX, offsetY]
  }
  
  const handleOnMouseMove = (e) => {
    setOffset(calcOffset(e))
  }
  return (
    <div className={styles['image-detail']}>
      <figure className={styles['image-wrapper']}>
        <img 
          src={image.src}
          alt={image.alt}
          width={width}
          height={height}
          onMouseOver={(e) => handleOnMouseOver(e)}
          onMouseLeave={(e) => handleOnMouseLeave(e)}
          onMouseMove={(e) => handleOnMouseMove(e)}
          className={styles.image}
        />
      </figure>
      <figure 
        className={styles.zoom}
        style={{ 
          display: zoomActive ? 'block' : 'none',
        }}
      >
        <div 
          className={styles['image-zoomed']}
          style={{
            backgroundImage: `url("${image.src}")`,
            backgroundSize: `${width * zoom}px ${height * zoom}px`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: `${offset[0]}% ${offset[1]}%`
          }}
        ></div>
      </figure>
    </div>
  )
};


export default ImageDetail;
