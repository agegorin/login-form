import * as React from "react";
import classnames from "../../utils/classnames";

import * as styles from "./Input.css"
import ErrorMessage from "../ErrorMessage/ErrorMessage";

interface InputProps {
  label: string
  type: string
  value: string
  disabled: boolean
  isError: boolean
  errorMessage: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const Input = React.forwardRef(
  (
    {label, type = "text", value = "", disabled = false, isError = false, errorMessage = "", onChange}: InputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {

    return <label className={styles.container}>
      <input
        className={classnames(styles.input, {[styles.error]: isError})}
        type={type}
        value={value}
        disabled={disabled}
        onChange={onChange}
        ref={ref}
        aria-label={label}
      />
      <span className={styles.label} aria-hidden="true">{label}</span>
      {isError && <ErrorMessage text={errorMessage} />}
    </label>
  });

export default Input;
