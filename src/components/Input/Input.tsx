import * as React from "react";
import classnames from "../../utils/classnames";

import * as styles from "./Input.css"

interface InputProps {
  label: string
  type?: string
  value?: string
  isError?: boolean
  errorMessage?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const Input = React.forwardRef(
  (
    {label, type = 'text', value, isError, errorMessage, onChange}: InputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {

    return <label className={styles.container}>
      <input
        className={classnames(styles.input, {[styles.error]: isError})}
        type={type}
        value={value}
        onChange={onChange}
        ref={ref}
        aria-label={label}
      />
      <span className={styles.label} aria-hidden="true">{label}</span>
      {isError && <span className={styles.errorMessage}>{errorMessage}</span>}
    </label>
  });

export default Input;
