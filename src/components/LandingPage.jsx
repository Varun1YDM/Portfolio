import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// import smallimg from "..assets/";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.2"
      className="w-full h-screen bg-zinc-900 pt-1"
      id="home"
    >
      <div className="textsstructure mt-52 px-20">
        {["Hey! there", "I am ", "M Varun Yadav"].map((item, index) => {
          return (
            <div className="masker overflow-hidden ">
              <div className="w-fit flex ">
                {/* 'FoundersGrotesk-Semibold' font-['FoundersGrotesk_Regular'] */}
                <h1 className="u text-[7vw] tracking-tighter font-bold leading-[7vw] ">
                  {index == 2 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "9vw" }}
                      transition={{ ease: [0.45, 0, 0.55, 1], duration: 1 }}
                      className="inline-block w-[8.5vw] bg-red-500 h-[5.2vw] b border-none rounded-lg relative  "
                    >
                      {/* <img src="" alt="" /> */}
                    </motion.div>
                  )}
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-28 flex justify-between items-center py-5 px-20">
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] cursor-pointer hover:bg-black hover:text-white border-zinc-400 font-light text-md rounded-full uppercase">
            start the project
          </div>
          <div className="w-10 h-10 border-[1px] flex items-center justify-center border-zinc-400 rounded-full">
            <span className="rotate-45">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
        <div className="logos flex gap-10">
          <a href="https://www.linkedin.com/in/mekala-varun-yadav-337b80293/">
            <FaLinkedin className="border-1 w-[2.5em] h-[2.5em] border-white" />
          </a>
          <a href="https://github.com/Varun1YDM">
            <FaGithubSquare className="border-1 w-[2.5em] h-[2.5em] border-white" />
          </a>
          <a href="https://www.instagram.com/_varun_ricky_/">
            <FaInstagram className="border-1 w-[2.5em] h-[2.5em] border-white" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

{
  /* <div className="masker font-['FoundersGrotesk-Semibold']">
          <h1 className="uppercase text-9xl tracking-tighter font-regular leading-[5.5vw] ">
            WE CREATE
          </h1>
        </div>
        <div className="masker font-['FoundersGrotesk-Semibold']">
          <h1 className="uppercase text-9xl tracking-tighter font-regular leading-[5.5vw] ">
            EYE OPENING
          </h1>
        </div>
        <div className="masker font-['FoundersGrotesk-Semibold']">
          <h1 className="uppercase text-9xl tracking-tighter font-regular leading-[5.5vw] ">
            PRESENTATION
          </h1>
        </div> */
}
