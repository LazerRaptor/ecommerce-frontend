import styles from './index.module.scss';


const StarRating = ({ size }) => {
  return (
    <div className={styles.rating}></div>
  )
}

StarRating.defaultProps = {
  size: '1.5em'
}


export default StarRating