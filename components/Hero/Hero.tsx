"use client";
import React from "react";
import { Banner, BannerStory, HeroAnimations, berries, blueberries } from "..";
import { useLayoutEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        animation: HeroAnimations(),
        trigger: ".hero",
        start: "top 100",
        end: "+=10000",
        scrub: true,
        pin: true,
      });
    });
    return () => ctx.revert();
  }, []);

  const bannerInfo = [
    [
      "we gooey",
      berries,
      "Locally sourced produce from some of perths finest organic markets",
    ],
    [
      "you gooey",
      blueberries,
      "Dream it up and we make it happen. No limits. ",
    ],
    [
      "Audio / Visual",
      berries,
      "We'll handle the tricky stuff, you handle your drinks",
    ],
    [
      "Entertainment",
      berries,
      "Friends are a bit dull? Let us get the party started",
    ],
  ];

  return (
    <section className="hero relative h-full w-full mx-auto border-slate-950 ">
      {bannerInfo.map(([heading, image, tagline], idx) => {
        return (
          <BannerStory heading={heading} tagline={tagline} id={idx} key={idx} />
        );
      })}
      <div className="absolute block text-right h-5/6 w-full mx-auto border-slate-950 ">
        {bannerInfo.map(([title, image], idx) => {
          return <Banner title={title} image={image} id={idx} key={idx} />;
        })}
      </div>
    </section>
  );
};

export default Hero;
