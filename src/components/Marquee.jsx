import React from "react";
import { motion } from "framer-motion";
function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]"
      id="home"
    >
      <div className="text border-t-2 border-b-2 border-zinc-300 flex  overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
          className="text-[20vw] font-semiboldbold pr-2 uppercase  pb-5 leading-none"
        >
          Developer
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
          className="text-[20vw] font-semibold pr-2 uppercase  pb-5 leading-none"
        >
          Explorer
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
