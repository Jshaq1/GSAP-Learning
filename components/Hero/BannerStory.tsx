import React, { FC } from "react";

interface BannerStoryProps {
  heading: string;
  tagline: string;
  id: number;
}

const BannerStory: FC<BannerStoryProps> = ({ heading, tagline, id }) => {
  return (
    <div className="story absolute h-full w-1/2 flex flex-col justify-between rounded-lg">
      <div className="flex flex-col justify-start gap-8 font-Urbanist px-10 py-10">
        <h4>{heading}</h4>
        <h2 className="w-2/3 text-4xl leading-extra-loose ">{tagline}</h2>
      </div>
      <div className="icons h-1/2 w-full"></div>
    </div>
  );
};

export default BannerStory;
