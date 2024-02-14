import { motion, useAnimate } from "framer-motion";
import React from "react";
import { Power4 } from "gsap/all";

function Featured() {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  return <div className="w-full h-dvh bg-black"></div>;
}

export default Featured;
