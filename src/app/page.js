import Navigation from "@/components/navigation/navigation";
import styles from "./page.module.css";

export default async function Page() {
  return (
    <div className={styles.page}>
      <Navigation />
      <section className={styles.container}>
        <div className={styles.left}>
          <h2>Navigation</h2>
          <div className={styles.portfolioNames}>
            <h2>PortfolioName</h2>
            <h2>PortfolioName</h2>
            <h2>PortfolioName</h2>
            <h2>PortfolioName</h2>
            <h2>PortfolioName</h2>
            <h2>PortfolioName</h2>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.pictureContainer}>
            <div className={styles.portfolioText}>
              <h2>PortfolioName</h2>
            </div>
            <div className={styles.imgboks}>
              <p>img</p>
            </div>
            <div className={styles.imgboks}>
              <p>img</p>
            </div>
            <div className={styles.imgboks}>
              <p>img</p>
            </div>
            <div className={styles.imgboks}>
              <p>img</p>
            </div>
            <div className={styles.imgboks}>
              <p>img</p>
            </div>
            <div className={styles.imgboks}>
              <p>img</p>
            </div>
            <div className={styles.imgboks}>
              <p>img</p>
            </div>
            <div className={styles.imgboks}>
              <p>img</p>
            </div>
            <div className={styles.imgboks}>
              <p>img</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
