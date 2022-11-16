import * as React from "react";

import * as styles from "./SubmitButton.css";

interface InputProps {
  text: string
}

const Input = React.forwardRef(
  (
    {text}: InputProps
  ) => {

    return <input
      className={styles.input}
      type="submit"
      value={text}
    />
  });

export default Input;
