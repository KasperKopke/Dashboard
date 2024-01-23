import fs from "fs";
import Image from "next/image";
import path from "path";

const ImageGallerySplit = ({ selectedFolder }) => {
  const folderPath = path.join(process.cwd(), `public/umbra/${selectedFolder}`); // Stien til den valgte mappe

  const imageFiles = fs.readdirSync(folderPath); // Læs alle filnavne fra mappen

  return (
    <div>
      {imageFiles.map((file) => (
        <Image
          key={file}
          src={`/umbra/${selectedFolder}/${file}`} // Stien til hvert billede
          alt={file}
          width={200}
          height={200}
        />
      ))}
    </div>
  );
};

export default ImageGallerySplit;
