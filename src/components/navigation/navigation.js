import Link from "next/link";

import styles from "./navigation.module.css";

const Navigation = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <h1>DashBoard</h1>
        <h3>Bars</h3>
        <ul className={styles.ull}>
          <li className={styles.split}>Split</li>
          <li className={styles.show}>Show All</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
