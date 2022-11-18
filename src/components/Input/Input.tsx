import * as React from "react";

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

    const inputClass = isError ? `${styles.input} ${styles.error}` : styles.input;

    return <label className={styles.container}>
      <input
        className={inputClass}
        type={type}
        value={value}
        onChange={onChange}
        ref={ref}
      />
      <span className={styles.label}>{label}</span>
      {isError && <span className={styles.errorMessage}>{errorMessage}</span>}
    </label>
  });

export default Input;
