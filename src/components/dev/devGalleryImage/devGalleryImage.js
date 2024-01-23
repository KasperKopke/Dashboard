import Image from "next/image";
import styles from "./devGalleryImage.module.css";
const DevGalleryImage = ({ image }) => {
  return (
    <div>
      <Image
        src={image.path}
        alt={`Portfolio billede taget af ${image.author} udstillet i halleriet ${image.gallery}`}
        className={styles.image}
        width={image.width}
        height={image.height}
      />
    </div>
  );
};
export default DevGalleryImage;
