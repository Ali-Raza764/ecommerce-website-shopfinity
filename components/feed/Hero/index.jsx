"use client";
import React from "react";
import HeroItem from "./HeroItem";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Hero = () => {
  return (
    <div className="flex items-center justify-center bg-black w-full md:w-[80%]  h-[60vh] md:h-full overflow-hidden box-border">
      <Carousel
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay
        className="w-full p-3"
      >
        <HeroItem />
        <HeroItem />
        <HeroItem />
      </Carousel>
    </div>
  );
};

export default Hero;
