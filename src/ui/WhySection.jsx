import React from "react";
import WhyItem from "@/components/ui/WhyItem";
import variantImage from "../assets/variantImage.png";
import recentWorkImage from "../assets/RecentworkImage.png";

const WhySection = () => {
  return (
    <section className="w-full flex justify-center px-6">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div
          data-aos="fade-right"
          className="bg-[#EEF0F6] rounded-3xl p-10 flex flex-col gap-8"
        >

          {/* VARIANTS IMAGE */}
          <div className="w-full h-20 rounded-xl flex items-center justify-end">
            <img className="w-[80%]" src={variantImage} alt="" />
          </div>

          {/* DASHBOARD IMAGE */}
          <div className="w-full h-[320px] rounded-2xl flex items-center justify-center">
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={recentWorkImage}
                alt=""
              />
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div data-aos="fade-left" className="flex flex-col gap-8">

          <h2 className="text-4xl md:text-5xl font-bold">
            Why we exist
          </h2>

          <div className="flex flex-col gap-5">

            <div data-aos="fade-up" data-aos-delay="100">
              <WhyItem text="Design is too complicated. We strip away unnecessary complexity." />
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <WhyItem text="Workflow is too fragmented. We combine essential tools into one experience." />
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
              <WhyItem text="Speed matters. We optimize for fast execution without compromising quality." />
            </div>

            <div data-aos="fade-up" data-aos-delay="400">
              <WhyItem text="Collaboration is non-negotiable. We make it seamless." />
            </div>

            <div data-aos="fade-up" data-aos-delay="500">
              <WhyItem text="Creativity thrives on constraints. We provide structure without stifling innovation." />
            </div>

            <div data-aos="fade-up" data-aos-delay="600">
              <WhyItem text="Tools should work for people—not the other way around. We design with empathy and clarity." />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhySection;