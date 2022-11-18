import * as React from 'react';
import Modal from "../Modal/Modal";
import LoginForm from "../LoginForm/LoginForm";

import * as styles from './LoginModal.css';
import {useState} from "react";
import ModalNavItem from "../ModalNavItem/ModalNavItem";

enum LoginStates {
  LOGIN,
  SIGNUP,
  FORGOT,
  WAIT
}

const states = [
  {type: LoginStates.LOGIN,  title: "Log in"},
  {type: LoginStates.SIGNUP,  title: "Sign up"},
]

const LoginModal = () => {

  const [curState, setCurState] = useState<LoginStates>(LoginStates.LOGIN);

  const handleLoginFormSubmit = (email: string, password: string) => {

    // place to call any store methods
    console.log(`try to log in with ${email} / ${password}`)

    setCurState(LoginStates.WAIT);
  }

  return <Modal>
    <div className={styles.modal}>
      <nav className={styles.nav}>
        {states.map(state => <ModalNavItem
          title={state.title}
          selected={state.type === curState}
          onClick={() => setCurState(state.type)}
        />)}
      </nav>
      {curState === LoginStates.LOGIN && <LoginForm onSubmit={handleLoginFormSubmit} />}
      {curState === LoginStates.SIGNUP && <p className={styles.underConstruction}>sign up form is under construction</p>}
      {curState === LoginStates.FORGOT && <p className={styles.underConstruction}>forgot password form is under construction</p>}
      {curState === LoginStates.WAIT && <p className={styles.underConstruction}>wait is under construction</p>}

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
