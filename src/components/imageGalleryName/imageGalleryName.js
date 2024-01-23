import fs from "fs";
import Image from "next/image";
import path from "path";
import React from "react";

const ImageGalleryName = () => {
  const umbraFolder = path.join(process.cwd(), "public/umbra");

  const folderNames = fs.readdirSync(umbraFolder);

  return (
    <div>
      {folderNames.map((folderName) => (
        <div key={folderName}>
          <h2>{folderName}</h2>
        </div>
      ))}
    </div>
  );
};

export default ImageGalleryName;
