import Image from "next/image";
import React from "react";
import { servicesData, statsData } from "./data";
import OurSpeciality from "@/components/feed/OurSpeciality";

const About = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full min-h-screen flex items-center justify-between">
        <div className="text w-1/2 px-12">
          <h1 className="text-4xl font-bold font-sans mb-9">Our Story</h1>
          <p className="text-lg font-medium">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            ullam laudantium, molestias velit ad similique dolor labore voluptas
            harum doloremque vitae, sed veniam nulla cumque quaerat et vero iste
            sunt!
          </p>
        </div>
        <div className="image w-1/2 flex items-center justify-end">
          <Image
            height={700}
            width={700}
            src={"/images/about-1.jpg"}
            alt="Image-1"
          />
        </div>
      </div>
      <div className="min-h-screen px-12 my-12 flex items-center justify-center gap-y-24 flex-col">
        <div className="stats flex items-center justify-between gap-5">
          {statsData.map((item) => {
            return (
              <div
                className={
                  "h-[12rem] w-[25%] border border-gray-400 rounded-md p-3 " +
                  item.style
                }
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="icon p-2 rounded-full bg-gray-400">
                    <div className="p-2 rounded-full bg-black">
                      <item.icon
                        size={35}
                        className="text-white bg-transparent"
                      />
                    </div>
                  </div>

                  <h2 className="value text-3xl font-bold">{item.stat}</h2>
                  <p className="text-lg font-medium">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <OurSpeciality />
      </div>
    </div>
  );
};

export default About;
