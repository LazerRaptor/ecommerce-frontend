import { useState, useRef, Fragment } from 'react';
import { v4 } from 'uuid';
import styles from './index.module.scss';


type IProps = {
  type: 'text' | 'email' | 'password',
  label: string,
}

const Input = ({ type, label }: IProps) => {
  const ref = useRef(null)
  const onChange = (e) => {}
  const onFocus = (e) => {
    if (e.currentTarget.id === ref.current.htmlFor) {
      ref.current.classList.add(styles['label__on-focus'])
    }
  }
  const onBlur = (e) => {
    if (!e.currentTarget.value) {
      if (e.currentTarget.id === ref.current.htmlFor) {
        ref.current.classList.remove(styles['label__on-focus'])
      }
    }
  }
  const id = v4()
  return (
    <div className={styles.field}>
      <input 
        onChange={(e) => onChange(e)}
        onFocus={(e) => onFocus(e)}
        onBlur={(e) => onBlur(e)}
        id={id}
        type={type}
        className={styles.input}
      />
      <label
        htmlFor={id} 
        className={styles.label} 
        ref={ref}
      >
        {label}
      </label>
    </div>
  )
}


export default Input;