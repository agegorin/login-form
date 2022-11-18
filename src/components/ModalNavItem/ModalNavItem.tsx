import * as React from 'react';
import classnames from "../../utils/classnames";

import * as styles from "./ModalNavItem.css"

interface ModalNavItemProps {
  title: string,
  selected: boolean,
  onClick: () => void
}

const ModalNavItem = ({title, selected, onClick}: ModalNavItemProps) => {

  return <a
    href="#"
    className={classnames(styles.navItem, {[styles.selected]: selected})}
    onClick={(ev) => {
      ev.preventDefault();
      onClick();
    }}
  >{title}</a>
}

export default ModalNavItem;
