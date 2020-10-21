import styles from './BaseElement.module.scss';


const BaseElement = ({ type }) => {
  let prefixedType = 'skeleton-' + type
  const classes = `${styles.skeleton} ${styles[prefixedType]}`
  return (
    <div className={classes}>
    </div>
  )
}

export default BaseElement;