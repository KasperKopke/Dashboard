import styles from "./page.module.css";
import { fetchAuthors } from "@/lib/data.service";
import ImageGalleryName from "@/components/imageGalleryName/imageGalleryName";
export default async function Page() {
  let authors = await fetchAuthors();

  return (
    <div className={styles.page}>
      <section className={styles.container}>
        <div className={styles.left}>
          <h2>Navigation</h2>
          <div className={styles.portfolioNames}>
            <ImageGalleryName authors={authors}></ImageGalleryName>
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
