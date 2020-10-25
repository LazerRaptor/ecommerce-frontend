import { Fragment } from "react";
import styles from '../index.module.scss';

const Computer = ({ computer }) => {
  const specs = [
    ['Central Processor', computer.cpu],
    ['Graphics', computer.gpu],
    ['Hard Drive', computer.hdd]
  ]
  return (
      specs.map(spec => (
        <div className={styles['spec-row']}>
          <span data-content={spec[0]}></span><span>{spec[1]}</span>
        </div>
      ))
  );
};

export default Computer;
