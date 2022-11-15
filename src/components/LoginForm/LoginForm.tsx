import * as React from 'react';
import {useEffect, useRef, useState} from "react";
import Modal from "../Modal/Modal";

import * as styles from './LoginForm.css';
import Input from "../Input/Input";

const LoginForm = () => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    emailRef.current?.focus();
  }, [])

  return <Modal>
    <form className={styles.form}>
      <h2>Please, log in</h2>
      <Input
        label="email"
        type="email"
        value={email}
        onChange={(ev) => setEmail(ev.target.value)}
      />
      <Input
        label="password"
        type="password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <input type="submit" value="Log in"/>
    </form>
  </Modal>;
}

export default LoginForm;
