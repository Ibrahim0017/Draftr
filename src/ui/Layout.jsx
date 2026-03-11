import React from "react";
import { FaApple, FaWindows } from "react-icons/fa";
import layout from "../assets/layoutImage.png"; 

const Layout = () => {
  return (
    <section className="w-full pt-32 bg-gradient-to-b from-[#ffffff] to-[#e0dafe] flex flex-col items-center text-center px-6">

      {/* Text Content */}
      <div className="max-w-3xl space-y-6">

        <h1 className="text-5xl text-[24px] leading-8 font-bold text-black md:leading-15 md:text-6xl">
          Take your creative workflow 
          to the next level
        </h1>

        <p className="text-[15px] text-gray-600 md:text-lg">
          Supercharge your workflow with powerful design tools and effortless
          collaboration—perfect for freelancers and teams.
        </p>

        {/* Buttons */}
        <div className="flex justify-center items-center gap-4 pt-4">

          <button className="px-8 py-4 rounded-full text-white font-semibold bg-gradient-to-r from-purple-600 to-indigo-500 shadow-lg hover:scale-105 transition">
            Get Started
          </button>

          <button className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow">
            <FaWindows size={20} />
          </button>

          <button className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow">
            <FaApple size={20} />
          </button>

        </div>
      </div>

      {/* Dashboard Image */}
      <div className="mt-20 max-w-6xl w-full">
        <img
          src={layout}
          alt="dashboard"
          className="w-full rounded-3xl shadow-2xl"
        />
      </div>

    </section>
  );
};

export default Layout;
