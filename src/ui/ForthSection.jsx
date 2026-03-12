import React from "react";
import image from "../assets/ilnxb8JlQSPXcjRWoZTNLGSFBk.png";

const ForthSection = () => {
  return (
    <div className="w-full flex justify-center py-20">
      <div className="w-[90%] max-w-7xl flex flex-col lg:flex-row gap-12">

        {/* LEFT SIDE */}
        <div data-aos="fade-right" className="flex flex-col">
          <h1 className="text-4xl md:text-5xl font-bold mb-10">
            Simplify your <br /> workflow
          </h1>

          <div className="space-y-8">

            {/* Step 1 */}
            <div data-aos="fade-up" data-aos-delay="100" className="flex gap-4">
              <div className="flex items-center h-[34px] justify-center bg-gradient-to-tr from-purple-500 to-indigo-500 text-white font-semibold px-2 rounded-md">
                01
              </div>
              <div>
                <h3 className="text-lg font-semibold">Start your project</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Create a new design or import files with just a click.
                  Set up your workspace effortlessly.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div data-aos="fade-up" data-aos-delay="200" className="flex gap-4">
              <div className="flex items-center h-[34px] justify-center bg-gradient-to-tr from-purple-500 to-indigo-500 text-white font-semibold px-2 rounded-md">
                02
              </div>
              <div>
                <h3 className="text-lg font-semibold">Design with ease</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Use our intuitive drag-and-drop editor and smart tools
                  to create stunning designs.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div data-aos="fade-up" data-aos-delay="300" className="flex gap-4">
              <div className="flex items-center h-[34px] justify-center bg-gradient-to-tr from-purple-500 to-indigo-500 text-white font-semibold px-2 rounded-md">
                03
              </div>
              <div>
                <h3 className="text-lg font-semibold">Export & Share</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Easily integrate with your favorite tools to launch
                  your project effortlessly.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          data-aos="zoom-in"
          className="w-full h-[470px] bg-[#ECEEF4] rounded-[50px]"
        >
          <div className="w-full h-full rounded-3xl p-6 overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-4xl"
              src={image}
              alt=""
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ForthSection;