"use client";
import React from "react";
import HeroItem from "./HeroItem";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Hero = () => {
  return (
    <div className="flex items-center justify-center bg-black w-[80%] h-full">
      <Carousel
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        autoPlay
      >
        <HeroItem />
        <HeroItem />
        <HeroItem />
      </Carousel>
    </div>
  );
};

export default Hero;
