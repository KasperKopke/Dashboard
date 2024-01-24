import styles from "./page.module.css";
import ImageGallery from "@/components/imageGallery/imageGallery";
import { fetchAuthors, fetchImagesForGallery } from "@/lib/data.service";

export default async function Page() {
  let gallery = "umbra";

  let authors = await fetchAuthors();
  const images = await fetchImagesForGallery(gallery);
  return (
    <div className={styles.page}>
      <section className={styles.container}>
        <div className={styles.right}>
          <div className={styles.pictureContainer}>
            {images.map((images, index) => (
              <div key={index}>
                <ImageGallery authors={authors} images={images}></ImageGallery>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
