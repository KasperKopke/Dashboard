"use client";
import React from "react";
import Link from "next/link";
import styles from "./navigation.module.css";

const Navigation = () => {
  const { useState, useEffect } = React;
  const [itsFalse, setBool] = useState(false);

  const buttonHandler = () => {
    setBool((current) => !current);
  };

  useEffect(() => {
    console.log(itsFalse);
  }, [itsFalse]);

  return (
    <div>
      <nav className={styles.nav}>
        <h1>DashBoard</h1>
        <h3 onClick={buttonHandler}>Bars</h3>
        <ul className={`${styles.ull} ${itsFalse ? styles.active : ""}`}>
          <Link href={"./"} className={styles.split}>
            Split
          </Link>
          <Link href={"./showAll"} className={styles.show}>
            Show All
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
