"use client";
import React from "react";
import { Banner, BannerStory } from "..";
import { useLayoutEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.to(".banner", { width: "50%", transformOrigin: "100%", duration: 1 })
      .to("#banner1", { clipPath: "circle(100%)" })
      .to("#banner2", { clipPath: "circle(100%)" })
      .to("#banner3", { clipPath: "circle(100%)" });

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        animation: tl,
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
    ["Rethink Party", "/yadda", "Innovative party solutions for all occasions"],
    ["Decoration", "/yadda", "Dream it up and we make it happen. No limits. "],
    [
      "Audio / Visual",
      "/yadda",
      "We'll handle the tricky stuff, you handle your drinks",
    ],
    [
      "Entertainment",
      "/yadda",
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
