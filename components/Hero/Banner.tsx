"use client";
import React from "react";
import { FC } from "react";

interface BannerProps {
  title: string;
  image: string;
  id: number;
}

const Banner: FC<BannerProps> = ({ title, image, id }) => {
  return (
    <div
      id={`banner${id}`}
      style={
        id === 0
          ? { visibility: "visible", backgroundColor: "black" }
          : { clipPath: "circle(0%)", backgroundColor: "blue" }
      }
      className="banner absolute right-0 h-full w-full flex justify-center items-center rounded-lg"
    >
      <h1 className="herotext h-fit font-Urbanist text-white text-8xl ">
        {title}
      </h1>
    </div>
  );
};

export default Banner;
