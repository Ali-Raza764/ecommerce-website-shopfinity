"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";

const Carousel = ({ children, slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="w-full overflow-hidden pt-6">
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container flex items-center gap-6">
            {children}
          </div>
        </div>
        <div className="absolute right-0 top-10 hidden md:block">
          <button className="embla__prev" onClick={scrollPrev}>
            <IoArrowBackCircleOutline
              size={50}
              className="text-gray-500 hover:text-black transition"
            />
          </button>
          <button className="embla__next" onClick={scrollNext}>
            <IoArrowForwardCircleOutline
              size={50}
              className="text-gray-500 hover:text-black transition"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
