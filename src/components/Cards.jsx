import React from "react";

function Cards() {
  return (
    <div>
      <h1 className="ml-40 text-6xl  pt-32 mb=0">Projects</h1>
      <div
        className="w-full h-screen  bg-zinc-900 flex items-center  px-32 gap-5"
        id="pro"
      >
        <div className="cardcontainor h-[45vh]  w-1/3">
          <div className="card r w-full h-full rounded-lg bg-[#004D43] flex flex-col p-10">
            <h1 className="text-2xl font-bold mb-5">Fake News Detection</h1>
            <ol className="list-disc mt-3 ml-8 text-white space-y-3">
              <li className="">
                Predict whether the given news is fake or real based on the
                headlines given.
              </li>
              <li>Showing the output using Streamlit.</li>
              <li>
                <span className="font-semibold">Technical Skills : </span>{" "}
                Python with Pandas, matplotlib, Streamlit.
              </li>
            </ol>
            <button className=" w-fit mt-6 px-4 py-1 rounded-full border-2 text-lg hover:bg-black ">
              visit
            </button>
          </div>
        </div>
        <div className="cardcontainor h-auto w-1/3">
          <div className="card r w-full h-full rounded-lg bg-[#004D43] flex flex-col p-10">
            <h1 className="text-2xl font-bold mb-5">NOTEE</h1>
            <ol className="list-disc mt-3 ml-8 text-white space-y-3">
              <li className="">
                Implemented user authentication system allowing users to
                register, log in, and log out securely.
              </li>
              <li>
                Enabled users to create, update, and delete personalized notes
                by adding titles and descriptions, providing a seamless user
                experience.
              </li>
              <li>
                <span className="font-semibold">Tech Stack : </span>
                HTML , TailwindCSS , Django
              </li>
            </ol>
            <button className=" w-fit mt-6 px-4 py-1 rounded-full border-2 text-lg hover:bg-black ">
              visit
            </button>
          </div>
        </div>
        <div className="cardcontainor h-[45vh] w-1/3">
          <div className="card r w-full h-full rounded-lg bg-[#004D43] flex flex-col p-10">
            <h1 className="text-2xl font-bold mb-5">Porfolio</h1>
            <ol className="list-disc mt-3 ml-8 text-white space-y-3">
              <li className="">
                Designed and developed a sleek and modern portfolio website
              </li>
              <li>
                Implemented smooth animations and transitions with Framer
                Motion.
              </li>
              <li>
                <span className="font-semibold">Tech Stack : </span>
                React , TailwindCSS , Framer
              </li>
            </ol>
            <button className=" w-fit mt-6 px-4 py-1 rounded-full border-2 text-lg hover:bg-black ">
              visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
