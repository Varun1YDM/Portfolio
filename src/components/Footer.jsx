import React from "react";

function Footer() {
  return (
    <div className="w-full flex gap-5 h-screen bg-zinc-900 p-20" id="foot">
      <div className="w-1/2 flex flex-col h-full justify-between">
        <div className="heading"></div>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <h1 className="text-7xl  font-semibold uppercase leading-none mb--10">
          Contact me
        </h1>
        <div className="ml-12 details  ">
          <a
            className="block text-4xl text-blue-500  font-medium mb-5 "
            href="https://www.linkedin.com/in/mekala-varun-yadav-337b80293/"
          >
            Linked<span className="text-blue-300">In</span>
          </a>
          <a
            className="block text-4xl  font-medium mb-5 "
            href="https://www.instagram.com/_varun_ricky_/"
          >
            <span className="text-transparent bg-clip-text  font-bold bg-gradient-to-r text-4xl from-pink-500 to-purple-500">
              Instagram
            </span>
          </a>
          <a
            className="block text-4xl text-blue-400  font-medium mb-5"
            href="https://www.facebook.com/varunyadav9966/"
          >
            Facebook
          </a>
          <a
            className="block text-4xl text-green-400  font-medium mb-5"
            href="https://github.com/Varun1YDM"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
