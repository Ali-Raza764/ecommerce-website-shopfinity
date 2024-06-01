"use client";
import Image from "next/image";
import React, { useState } from "react";

// TODO Make an image selection system
const ImagesShowcase = ({ images }) => {
  const [selectedImage, setselectedImage] = useState(images[0]);

  const changeSelectedImage = (url) => {
    setselectedImage(url);
    console.log(url);
  };

  return (
    <div className="lg:w-1/2 w-full images flex justify-center lg:justify-start items-center gap-3 flex-wrap-reverse md:flex-nowrap">
      <div className="available_images md:h-[25rem] lg:w-[10rem] flex md:flex-col items-center justify-center gap-2 overflow-auto box-border overflowed-product-images">
        {images?.map((image, i) => {
          return (
            <Image
              key={i}
              src={image}
              onClick={() => changeSelectedImage(image)}
              height={100}
              width={100}
              className="cursor-pointer"
              alt="product-images"
            />
          );
        })}
      </div>
      <Image
        className="rounded"
        src={selectedImage}
        height={400}
        width={400}
        alt="product Image"
      />
    </div>
  );
};

export default ImagesShowcase;
