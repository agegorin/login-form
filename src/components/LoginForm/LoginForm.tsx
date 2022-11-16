import * as React from 'react';
import {useState} from "react";
import Modal from "../Modal/Modal";

import * as styles from './LoginForm.css';
import Input from "../Input/Input";

const LoginForm = () => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return <Modal>
    <form className={styles.form}>
      <nav className={styles.nav}>
        <span className={`${styles.navItem} ${styles.selected}`}>LOG IN</span>
        <a href="#" title="sorry, not implemented yet" className={styles.navItem}>SIGN UP</a>
      </nav>
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
      <input className={styles.submit} type="submit" value="Log in"/>
      <a className={styles.forgot} href="#">forgot password?</a>
    </form>
  </Modal>;
}

export default LoginForm;
