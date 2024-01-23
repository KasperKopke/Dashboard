import Image from "next/image";
import path from "path";
import styles from "./imageGallery.module.css";

const ImageGallery = ({ authors }) => {
  return (
    <div>
      {authors.map((author) => (
        <div key={author._id}>
          <h2 className={styles.h2}>{author.author}</h2>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
