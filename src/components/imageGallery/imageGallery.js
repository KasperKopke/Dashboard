import Image from "next/image";
import styles from "./imageGallery.module.css";

const ImageGallery = ({ authors, images }) => {
  return (
    <div>
      {authors.map((author) => (
        <div key={author._id}>
          <h2 className={styles.h2}>{author.author}</h2>
          <Image
            src={images.path}
            alt={`Portfolio billede taget af ${images.author} udstillet i galleriet ${images.gallery}`}
            className={styles.image}
            width={200}
            height={200}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
