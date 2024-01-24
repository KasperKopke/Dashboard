"use client";

import Image from "next/image";
import React from "react";

const ImageGalleryName = ({ authors }) => {
  const getauthor = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <div>
      <div>
        {authors.map((author) => (
          <div onClick={getauthor} key={author._id}>
            <h2>{author.author}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGalleryName;
