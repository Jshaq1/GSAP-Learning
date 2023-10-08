import { StaticImageData } from "next/image";
import React from "react";
import { FC } from "react";
import Image from "next/image";
import { gooey } from "..";

interface BannerProps {
  title: string;
  image: StaticImageData;
  id: number;
}

const Banner: FC<BannerProps> = ({ title, image, id }) => {
  return (
    <div
      id={`banner${id}`}
      style={
        id === 0
          ? { visibility: "visible" }
          : { clipPath: "circle(0%)", backgroundColor: "blue" }
      }
      className="banner absolute right-0 h-full w-full flex justify-center items-center rounded-lg overflow-hidden"
    >
      <h1
        style={gooey.style}
        className="herotext h-fit font-night z-10  text-white text-5xl text-regal-green "
      >
        {title}
      </h1>
      <Image
        alt=""
        src={image}
        className="absolute flex-shrink-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default Banner;
