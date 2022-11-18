import * as React from 'react';
import {useRef, useState} from "react";

import * as styles from './LoginForm.css';
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void
}

type Validator = (value: string) => boolean;

const emailValidator: Validator = (value) => value.length !== 0 && value.indexOf('@') !== -1;
const passwordValidator: Validator = (value) => value.length !== 0;

const LoginForm = ({onSubmit}: LoginFormProps) => {

  const [triedToSubmit, setTriedToSubmit] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPassError, setShowPassError] = useState(false);

  const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (ev) => {
    setEmail(ev.target.value)

    if (triedToSubmit) {
      setShowEmailError(!emailValidator(ev.target.value));
    }
  }

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (ev) => {
    setPassword(ev.target.value)

    if (triedToSubmit) {
      setShowPassError(!passwordValidator(ev.target.value));
    }
  }

  const checkForm = () => {
    setTriedToSubmit(true);
    const elementsWithErrors = [];

    const isEmailValid = emailValidator(email);
    setShowEmailError(!isEmailValid);
    if (!isEmailValid) {
      elementsWithErrors.push(emailRef);
    }

    const isPasswordValid = passwordValidator(password);
    setShowPassError(!isPasswordValid);
    if (!isPasswordValid) {
      elementsWithErrors.push(passwordRef);
    }

    if (elementsWithErrors.length === 0) {
      onSubmit(email, password);
    } else {
      elementsWithErrors[0].current?.focus();
    }
  }

  return <form
    className={styles.form}
    onSubmit={(ev) => {
      ev.preventDefault();
      checkForm();
    }}
    noValidate
  >
    <Input
      label="email"
      type="email"
      value={email}
      isError={showEmailError}
      errorMessage={'email cannot be empty and should have @ symbol'}
      ref={emailRef}
      onChange={handleEmailChange}
    />
    <Input
      label="password"
      type="password"
      value={password}
      isError={showPassError}
      errorMessage={'password cannot be empty'}
      ref={passwordRef}
      onChange={handlePasswordChange}
    />
    <SubmitButton text={`log in`}/>
  </form>;
}

export default LoginForm;
