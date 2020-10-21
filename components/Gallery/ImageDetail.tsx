import { useState, useEffect, useRef } from 'react';
import styles from './ImageDetail.module.scss';


const ImageDetail = ({ image, width=320, height=320, zoom=2 }) => {

  const myRef = useRef(null)
  const [rectProps, setRectProps] = useState({
    x: 0,
    y: 0,
    h: height,
    w: width
  })
  useEffect(() => {
    let params = myRef.current.getBoundingClientRect()
    setRectProps({
      x: params.x,
      y: params.y,
      h: params.height,
      w: params.width
    })
  }, [])
 
  const [mousePosition, setMousePosition] = useState({
    x: 0, 
    y: 0
  })
  const moveMagnifyingGlass = (e) => {
    setMousePosition({x: e.clientX, y: e.clientY})
  }
  const translateToPercentages = (cursorX, cursorY, rectX, rectY, height, width) => {
    /** The first two args identify cursor position, others - container element's props */  
    const deltaX = cursorX - rectX
    const deltaY = cursorY - rectY
    console.log(deltaX, deltaY)
    const xRatio = deltaX / width * 100
    const yRatio = deltaY / height * 100
    return [xRatio, yRatio]
  }
  const imgPosition = () => {
    const [x, y] = translateToPercentages(
      mousePosition.x, 
      mousePosition.y, 
      rectProps.x, 
      rectProps.y, 
      rectProps.h, 
      rectProps.w
    )
    return [x, y]
  }
  return (
    <div className={styles['image-wrapper']}>
      <div>
        <img
          src={image.src}
          alt={image.alt}
          width={width}
          height={height}
          className="contain"
        />
      </div>
      <div 
        className={styles['magnifier-wrapper']}
        onMouseMove={(e) => moveMagnifyingGlass(e)}
        ref={myRef}
      >
        <img 
          src={image.src} 
          alt={image.alt}
          style={{ objectPosition: `${imgPosition()[0]}% ${imgPosition()[1]}%`}}
          className={styles.magnifier}
          width={width * zoom}
          height={height * zoom}
        />
      </div>
    </div>
  );
};


export default ImageDetail;
