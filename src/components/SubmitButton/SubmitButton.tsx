import * as React from "react";

import * as styles from "./SubmitButton.css";

interface InputProps {
  text: string,
  disabled: boolean
}

const Input = React.forwardRef(
  (
    {text, disabled = false}: InputProps
  ) => {

    return <input
      className={styles.input}
      type="submit"
      disabled={disabled}
      value={text}
    />
  });

export default Input;
