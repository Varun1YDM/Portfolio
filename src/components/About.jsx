import React from "react";
import pic from "./BIG.jpg";
function About() {
  const divStyle = {
    backgroundImage: `url(${pic})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl"
      id="about"
    >
      <div className="flex gap-5 w-full border-t-[2px]  pt-10 border-[#a1b562] ">
        <div className="w-1/2">
          <h1 className="text-7xl font-semibold text-black  ">
            About Me:
            <div className="bg-black h-1 w-52 mt-2"></div>
          </h1>
          <p className="text-black font-normal tracking-wide  w-4/5 mt-16 text-2xl">
            As a proficient developer with a strong programming background, I'm
            eager to apply my expertise in a real-world setting. With a focus on
            innovation and a drive for excellence, I'm ready to contribute to
            impactful projects and collaborate with fellow professionals to make
            a difference in the tech industry.
          </p>
          <button className=" px-5 py-2 text-white- bg-[#004D43] text-xl   cursor-pointer font-medium mt-[100px] rounded-full  ">
            Download Resume
          </button>
        </div>
        <div
          className="w-1/2 h-[70vh] rounded-3xl bg-[#8ea246] "
          style={divStyle}
        >
          {/* <img src={pic} className="  " alt="" /> */}
        </div>
      </div>
    </div>
  );
}

export default About;
