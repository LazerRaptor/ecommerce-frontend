import { Fragment } from 'react';
import BaseElement from './BaseElement';
import foreignStyles from '../Sidebar/index.module.scss';
import styles from './SidebarSkeleton.module.scss'


const SidebarSkeleton = () => {
  return (
    <div className={foreignStyles.sidebar}>
      <BaseElement type="title" />
      {[1, 2, 3, 4, 5].map(_ => (
        <div className={styles.list}>
          <BaseElement type="title" />
          <BaseElement type="text" />
          <BaseElement type="text" />
        </div>
      ))}
    </div>
  )
}

export default SidebarSkeleton;