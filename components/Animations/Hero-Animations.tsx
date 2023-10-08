import gsap from "gsap";

import React from "react";

const HeroAnimations = () => {
  const tl = gsap.timeline();
  return tl
    .to(".banner", {
      width: "55%",
      transformOrigin: "100%",
      duration: 1,
      ease: "power1.inOut",
    })
    .to(
      "#story0",
      { transform: "translate(0,0)", opacity: "1", ease: "power1.inOut" },
      0.5
    )
    .to("#banner1", { clipPath: "circle(100%)" })
    .to(
      "#story1",
      { transform: "translate(0,0)", opacity: "1", ease: "power1.inOut" },
      "<"
    )
    .to("#banner2", { clipPath: "circle(100%)", ease: "power1.inOut" })
    .to(
      "#story2",
      { transform: "translate(0,0)", opacity: "1", ease: "power1.inOut" },
      "<"
    )
    .to("#banner3", { clipPath: "circle(100%)", ease: "power1.inOut" })
    .to(
      "#story3",
      { transform: "translate(0,0)", opacity: "1", ease: "power1.inOut" },
      "<"
    );
};

export default HeroAnimations;
