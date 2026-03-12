import Badge from "@/components/ui/Badge";
import HeroButton from "@/components/ui/HeroButton";
import HeroPicture from "@/components/ui/HeroPicture";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full mt-34 bg-linear-to-b from-transparent via-[#d8d1fc] to-transparent flex flex-col justify-center items-center px-6 gap-16">
      
      <div
        data-aos="fade-up"
        className="flex flex-col items-center w-[90%] text-center gap-8"
      >
        <Badge />

        <h1 className="font-bold text-[42px] leading-[1.1] md:text-[72px] lg:text-[96px] max-w-[900px]">
          Bring ideas to life in just a few clicks.
        </h1>

        <p className="text-gray-600 text-sm md:text-lg max-w-[720px]">
          Design, prototype, and collaborate in real-time - all in one powerful
          <span className="font-bold"> platform.</span> Elevate your creative
          <span className="font-bold"> process</span> with
          <span className="font-bold"> seamless teamwork</span> and limitless
          possibilities.
        </p>

        <HeroButton />
      </div>

      <div>
        <HeroPicture />
      </div>

    </div>
  );
};

export default Hero;