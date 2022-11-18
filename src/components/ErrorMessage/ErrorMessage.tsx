import * as React from "react";

import * as styles from "./ErrorMessage.css"
import classnames from "../../utils/classnames";

interface ErrorMessageProps {
  text: string
  className?: string
}

const ErrorMessage = ({ text = "", className = "" }: ErrorMessageProps) => {
    return <span className={classnames(styles.errorMessage, className)} role="alert">{text}</span>
};

export default ErrorMessage;
