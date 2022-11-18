import * as React from 'react';

import * as styles from "./ModalNavItem.css"

interface ModalNavItemProps {
  title: string,
  selected: boolean,
  onClick: () => void
}

const ModalNavItem = ({title, selected, onClick}: ModalNavItemProps) => {

  const styleString = selected ? `${styles.navItem} ${styles.selected}` : styles.navItem;

  return <a
    href="#"
    className={styleString}
    onClick={(ev) => {
      ev.preventDefault();
      onClick();
    }}
  >{title}</a>
}

export default ModalNavItem;
