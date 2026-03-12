import FifthSectionCard from "@/components/ui/FifthSectionCard";
import React from "react";
import firstImage from "../assets/power-up-1.svg";
import secondImage from "../assets/power-up-2.svg";
import DescriptionText from "@/components/ui/DescriptionText";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { SiTarget } from "react-icons/si";
import { IoRocketSharp } from "react-icons/io5";

const FifthSection = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="bg-[#101011] rounded-3xl py-24 px-4 flex flex-col justify-center items-center text-white">

        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center"
        >
          Power up your workflow <br /> with next-gen features
        </h1>

        {/* Top Cards */}
        <div className="flex flex-col md:flex-row gap-10">
          
          <div data-aos="zoom-in" data-aos-delay="100">
            <FifthSectionCard
              CardImage={firstImage}
              mainText="Cloud-based accessibility"
              subText="Access your projects anytime, anywhere--no downloads or installations needed."
            />
          </div>

          <div data-aos="zoom-in" data-aos-delay="200">
            <FifthSectionCard
              CardImage={secondImage}
              mainText="Fast & secure performance"
              subText="Experience lightning-fast speed with enterprise-level security and version control."
            />
          </div>

        </div>

        {/* Bottom Features */}
        <div className="w-[92%] flex flex-col mt-16 lg:flex-row gap-5">

          <div data-aos="fade-up" data-aos-delay="100">
            <DescriptionText
              icon={<IoRocketSharp />}
              Descriptionmaintext="Effortless design experience"
              DescriptionSubText="Intuitive interface and smart tools to speed up your creative process."
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <DescriptionText
              icon={<TbAdjustmentsHorizontal />}
              Descriptionmaintext="Customizable workflow"
              DescriptionSubText="Adapt the platform to your team's workflow with powerful settings."
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <DescriptionText
              icon={<SiTarget />}
              Descriptionmaintext="Precision & control"
              DescriptionSubText="Fine-tune every detail and achieve pixel-perfect designs."
            />
          </div>

        </div>

      </div>
    </div>
  );
};

export default FifthSection;