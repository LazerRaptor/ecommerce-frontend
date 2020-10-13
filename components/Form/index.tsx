import { Fragment } from 'react';
import { v4 } from 'uuid';
import Spacer from '../Spacer';
import styles from './index.module.scss';


const Form = ({ children, title, submitValue, spaceBetween }) => {
  /** Special case when form has exactly one immediate child */
  const SingleChild = ({ child }) => (
    <Fragment>
      {child}
      <Spacer y={spaceBetween} />
    </Fragment>
  )
  
  /** General case */
  const Children = ({ kids }) => (
    kids.map(child => (
      <Fragment key={v4()}>
        {child}
        <Spacer y={spaceBetween} />
      </Fragment>
    ))
  )
  return (
    <form className={styles.form}>
      <h1 className={styles.title}>{title}</h1>
      {
        Array.isArray(children) ? <Children kids={children} /> : <SingleChild child={children} />
      }
      <input type="submit" value={submitValue} className={styles['btn-submit']} />
    </form>
  )
}

Form.defaultProps = {
  spaceBetween: '1.4',
}

export default Form