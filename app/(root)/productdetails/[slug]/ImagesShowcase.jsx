"use client";
import Image from "next/image";
import React, { useState } from "react";

// TODO Make an image selection system
const ImagesShowcase = () => {
  const Image_data = {
    mainImageUrl: "https://dummyimage.com/400x400",
    otherImages: [
      {
        id: 1,
        url: "https://dummyimage.com/400x400",
      },
      {
        id: 1,
        url: "https://dummyimage.com/400x400",
      },
      {
        id: 1,
        url: "https://dummyimage.com/400x400",
      },
      {
        id: 1,
        url: "https://dummyimage.com/400x400",
      },
    ],
  }; // * Assuming a dummy images data

  const [setselectedImage, setSetselectedImage] = useState(
    Image_data.mainImageUrl
  );

  const changeSelectedImage = (url) => {
    setSetselectedImage(url);
    console.log(url);
  };

  return (
    <div className="lg:w-1/2 w-full images flex justify-center lg:justify-start items-center gap-3 flex-wrap-reverse md:flex-nowrap">
      <div className="available_images md:h-[25rem] lg:w-auto flex md:flex-col items-center justify-center gap-2 overflow-auto box-border overflowed-product-images">
        {Image_data.otherImages.map((image) => {
          return (
            <Image
              key={image.url}
              src="https://dummyimage.com/100x100"
              onClick={() => changeSelectedImage(image.url)}
              height={100}
              width={100}
              className="cursor-pointer"
              alt="product-images"
            />
          );
        })}
      </div>
      <Image
        className="rounded md:h-[25rem] md:w-auto w-[20rem]"
        src={setselectedImage}
        // "https://dummyimage.com/400x400"
        height={400}
        width={400}
        alt="product Image"
      />
    </div>
  );
};

export default ImagesShowcase;
