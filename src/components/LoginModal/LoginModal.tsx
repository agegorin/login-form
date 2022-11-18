import * as React from 'react';
import { useState } from "react";

import * as styles from './LoginModal.css';
import Modal from "../Modal/Modal";
import ModalNavItem from "../ModalNavItem/ModalNavItem";
import LoginForm from "../LoginForm/LoginForm";

enum LoginStates {
  LOGIN,
  SIGNUP,
  FORGOT,
  LOGIN_SUCCESS
}

const LoginModal = () => {

  const [curState, setCurState] = useState<LoginStates>(LoginStates.LOGIN);

  return <Modal>
    <div className={styles.modal}>
      <nav className={styles.nav}>
        <ModalNavItem
          title="Log in"
          selected={LoginStates.LOGIN === curState}
          onClick={() => setCurState(LoginStates.LOGIN)}
        />
        <ModalNavItem
          title="Sign up"
          selected={LoginStates.SIGNUP === curState}
          onClick={() => setCurState(LoginStates.SIGNUP)}
        />
      </nav>
      {curState === LoginStates.LOGIN && <LoginForm
        onSuccess={() => setCurState(LoginStates.LOGIN_SUCCESS)}
      />}
      {curState === LoginStates.SIGNUP && <p className={styles.underConstruction}>sign up form is under construction</p>}
      {curState === LoginStates.FORGOT && <p className={styles.underConstruction}>forgot password form is under construction</p>}
      {curState === LoginStates.LOGIN_SUCCESS && <p className={styles.underConstruction}>Login successful. Redirecting user to main page.</p>}

      {curState === LoginStates.LOGIN && <a
        className={styles.forgot}
        href="#"
        onClick={(ev) => {
          ev.preventDefault();
          setCurState(LoginStates.FORGOT);
        }}
      >Forgot your password?</a>}
    </div>
  </Modal>;
}

export default LoginModal;
