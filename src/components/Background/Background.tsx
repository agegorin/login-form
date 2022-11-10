import * as React from 'react';

import * as styles from "./Background.css";

const Background = () => {
  return <div className={""}>
    <header className={styles.bgHeader}></header>
    <main className={styles.bgMain}>
      <section className={styles.bgSection}>
        <article className={styles.bgArticle}>
          <title className={styles.bgTitle}></title>
          <span className={styles.bgLine100}></span>
          <span className={styles.bgLine100}></span>
          <span className={styles.bgLine100}></span>
          <span className={styles.bgLine75}></span>
          <span className={styles.bgLine100}></span>
          <span className={styles.bgLine100}></span>
          <span className={styles.bgLine25}></span>
          <span className={styles.bgLine100}></span>
          <span className={styles.bgLine100}></span>
          <span className={styles.bgLine100}></span>
          <span className={styles.bgLine100}></span>
          <span className={styles.bgLine100}></span>
          <span className={styles.bgLine75}></span>
        </article>
        <article className={styles.bgArticle}>
          <title className={styles.bgTitle}></title>
          <span className={styles.bgLine75}></span>
          <span className={styles.bgLine100}></span>
          <span className={styles.bgLine100}></span>
          <span className={styles.bgLine25}></span>
          <span className={styles.bgLine100}></span>
          <span className={styles.bgLine100}></span>
          <span className={styles.bgLine100}></span>
          <span className={styles.bgLine100}></span>
          <span className={styles.bgLine50}></span>
          <span className={styles.bgLine100}></span>
          <span className={styles.bgLine100}></span>
          <span className={styles.bgLine100}></span>
          <span className={styles.bgLine75}></span>
        </article>
      </section>
      <aside className={styles.bgSide}>

      </aside>
    </main>
  </div>;
}

export default Background;
