import * as React from "react";

import * as styles from "./Input.css"

interface InputProps {
  label: string
  type?: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const Input = ({label, type = 'text', value, onChange}: InputProps) => {

return <label className={styles.container}>
    <input
      className={styles.input}
      type={type}
      value={value}
      onChange={onChange}
    />
    <span className={styles.label}>{label}</span>
  </label>
}

export default Input;
