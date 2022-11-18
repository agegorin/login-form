import * as React from "react";

import * as styles from "./ErrorMessage.css"

interface ErrorMessageProps {
  text?: string;
}

const ErrorMessage = ({ text }: ErrorMessageProps) => {
    return <span className={styles.errorMessage} role="alert">{text}</span>
};

export default ErrorMessage;
