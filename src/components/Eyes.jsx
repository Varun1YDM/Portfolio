import React, { useEffect, useState } from "react";
import eye from "./Frame3.png";

function Eyes() {
  const [rotate, Setrotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      Setrotate(angle - 180);
    });
  });

  const divStyle = {
    backgroundImage: `url(${eye})`,
    backgroundSize: "center",
    backgroundPosition: "center",
  };

  return (
    <div className="eyes w-full h-screen overflow-hidden" id="skill">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="relative w-full h-full bg-cover bg-center bg-[url('')] "
        style={divStyle}
      >
        <div className="absolute flex gap-10  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
          <div className="w-[15vw] h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full">
            <div className="w-2/3 h-2/3 relative  bg-zinc-900 flex items-center justify-center rounded-full">
              <p className="text-center text-white items-center text-xl">
                Play
              </p>
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-10  "
              >
                <div className="w-10 h-10 bg-zinc-100 rounded-full t"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full">
            <div className="w-2/3 h-2/3 relative  bg-zinc-900 rounded-full flex items-center justify-center">
              <p className="text-center text-white items-center text-xl">
                Play
              </p>
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-10  "
              >
                <div className="w-10 h-10 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
