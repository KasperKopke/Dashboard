import Navigation from "@/components/navigation/navigation";
import styles from "./page.module.css";
import ImageGallery from "@/components/imageGallery/imageGallery";
import { fetchAuthors } from "@/lib/data.service";

export default async function Page() {
  let authors = await fetchAuthors();

  return (
    <div className={styles.page}>
      <Navigation />
      <section className={styles.container}>
        <div className={styles.right}>
          <div className={styles.pictureContainer}>
            <ImageGallery authors={authors}></ImageGallery>
          </div>
        </div>
      </section>
    </div>
  );
}
