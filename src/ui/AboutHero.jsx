import AboutImage from "@/components/ui/AboutImage";
import React from "react";

const AboutHero = () => {
  return (
    <div className="w-full mt-34 bg-[#d8d1fc] flex flex-col items-center px-6 py-20 gap-16 
    [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">

      <div className="w-full max-w-6xl flex flex-col items-center">

        <div
          data-aos="fade-up"
          className="flex flex-col items-center text-center gap-8 max-w-3xl"
        >
          <h1 className="font-light text-[42px] leading-[1.1] md:text-[30px] lg:text-[60px] md:leading-18">
            Design isn’t just what we do — it’s how we think.
          </h1>

          <p className="text-gray-600 text-sm md:text-lg max-w-[720px]">
            At Draftr, we’re
            <span className="font-bold"> building the next generation</span> of
            design tools—
            <span className="font-bold">
              {" "}
              simple, collaborative, and lightning fast.
            </span>
            Our mission is to empower teams to move from idea to execution without
            friction.
          </p>
        </div>

        <div className="pt-9 flex justify-center">
          <AboutImage />
        </div>

      </div>
    </div>
  );
};

export default AboutHero;