import * as React from 'react';
import {useRef, useState} from "react";

import authStore from "../../stores/auth";
import { emailValidator, passwordValidator } from "../../utils/validators";
import * as styles from './LoginForm.css';
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

interface LoginFormProps {
  onSuccess: () => void
}

const LoginForm = ({ onSuccess }: LoginFormProps) => {

  const [triedToSubmit, setTriedToSubmit] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPassError, setShowPassError] = useState(false);
  const [isWaitingServer, setIsWaitingServer] = useState(false);
  const [showServerError, setShowServerError] = useState(false);

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
      sendAuth();
    } else {
      elementsWithErrors[0].current?.focus();
    }
  }

  const sendAuth = () => {
    authStore
      .callAuth(email, password)
      .then(() => {
        onSuccess();
        console.log('Login successful. Redirecting user to main page.');
      })
      .catch(() => {
        setShowServerError(true);
      })
      .finally(() => {
        setIsWaitingServer(false);
      })

    setIsWaitingServer(true);
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
      disabled={isWaitingServer}
      errorMessage={'email cannot be empty and should have @ symbol'}
      ref={emailRef}
      onChange={handleEmailChange}
    />
    <Input
      label="password"
      type="password"
      value={password}
      isError={showPassError}
      disabled={isWaitingServer}
      errorMessage={'password cannot be empty'}
      ref={passwordRef}
      onChange={handlePasswordChange}
    />
    <SubmitButton text={`log in`} disabled={isWaitingServer} />
    {isWaitingServer && <p>WAIT</p>}
    {showServerError && <ErrorMessage text="user with this email and password was not found" />}
  </form>;
}

export default LoginForm;
