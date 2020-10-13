import { useState, useRef } from 'react';
import Form from '../../components/Form/';
import Input from '../../components/Form/Input';
import Spacer from '../../components/Spacer'
import styles from './Login.module.scss';


const Login = () => {
  return (
    <div className={styles['form-wrapper']}>
      <Form title="Sign In To Your Account" submitValue="Sign in">
        <Input type="email" label="Email" />
        {/* <Input type="password" label="Password" /> */}
      </Form>
    </div>
  )
}

export default Login